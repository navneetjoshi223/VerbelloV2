import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
//import { useLocation } from "react-router-dom";

// import questions from "../../questions";
import "./QuizQuestions.css";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import { useParams ,useNavigate } from "react-router-dom";

const QuizQuestions = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const correctAnswerAudioRef = React.useRef(null);
  const lessonCompletedAudioRef = React.useRef(null);
  const { language, lessonName } = useParams();
  const navigate = useNavigate();

  /** Navneet's useStates */
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    console.log(language, lessonName, "Check");
    let fetchData = async () => {
      let lesson = lessonName;
      let result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/qna/quizdata`, {
        params: {
          language,
          lesson,
        },
      });
      console.log(result.data, "Data");
      let quizData = transformQuizData(result.data.data);
      console.log(quizData, "QuizData");
      setQuestions(quizData);
    };

    fetchData();
  }, []);

  const handleGoToProfile = () => {
    // Navigate to the Lesson component and pass the lessonName as a parameter
    navigate(`/lesson/${language}`);
  };


  useEffect(() => {
    console.log("isAnsweredCorrectly? ", isAnsweredCorrectly);
    if (isAnsweredCorrectly) {
      playSuccessAudio();
    }
  }, [isAnsweredCorrectly]);

  function transformQuizData(originalData) {
    return originalData?.map((quiz) => {
      const options = quiz.options?.map((option) => option.type);
      const correctAnswer = quiz.options?.findIndex((option) => option.isAnswer);

      return {
        question: quiz.question,
        options: options,
        correctAnswer: correctAnswer,
      };
    });
  }

  const playSuccessAudio = () => {
    correctAnswerAudioRef.current.play();
  };

  const playLessonCompletedAudio = () => {
    lessonCompletedAudioRef.current.play();
  };

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === questions[currentQuestion].correctAnswer;
    setIsAnsweredCorrectly(isCorrect);
  };

  const handleNextClick = useCallback(() => {
    if (selectedOption !== null && isAnsweredCorrectly) {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsAnsweredCorrectly(false);
      } else {
        handleCompleteQuiz();
      }
    }
  }, [selectedOption, isAnsweredCorrectly, currentQuestion, questions, score]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isQuizCompleted || !questions.length) return;
      const numKey = parseInt(e.key, 10);
      if (numKey >= 1 && numKey <= 4) {
        const optionIndex = numKey - 1;
        if (optionIndex < (questions[currentQuestion]?.options?.length || 0)) {
          handleOptionClick(optionIndex);
        }
      } else if (e.key === "Enter" && isAnsweredCorrectly) {
        handleNextClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentQuestion, questions, isAnsweredCorrectly, isQuizCompleted, handleNextClick]);

  const getOptionClass = (index) => {
    if (selectedOption === null) return "option";
    if (selectedOption === index) {
      return isAnsweredCorrectly ? "option correct" : "option incorrect";
    }
    return "option";
  };

  const renderOptions = () => {
    return (
      questions &&
      questions[currentQuestion].options?.map((option, index) => (
        <div
          key={index}
          className={getOptionClass(index)}
          onClick={() => handleOptionClick(index)}
        >
          <span className="option-key">{index + 1}</span>
          <span>{option}</span>
        </div>
      ))
    );
  };

  const handleCompleteQuiz = async() => {
    console.log("Quiz Completed!");
    setIsQuizCompleted(true);
    playLessonCompletedAudio();

    
      try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/completelesson`, {
          _id: window.sessionStorage.getItem("userId"),
          language: language,
        });
      } catch (e) {
        console.log(e);
      }
    };




    
    //make api call to user and update lessons completed info
  

  const progressPercent = questions.length
    ? ((currentQuestion + (isAnsweredCorrectly ? 1 : 0)) / questions.length) * 100
    : 0;

  return (
    <>
      <Navbar />
      <div className="quiz-page">
        {questions.length > 0 &&
          (isQuizCompleted ? (
            <div className="quiz-completion">
              <img
                src="/images/mascot/pingu-speaking.jpeg"
                alt="Mascot congratulating."
                className="quiz-completion-mascot"
              />
              <h2>Kudos! You've done amazing!</h2>
              <p>
                You completed the {lessonName} quiz in {language}.
              </p>
              <button
                className="quiz-btn quiz-btn-primary"
                onClick={() => handleGoToProfile("LessonNameToUpdate")}
              >
                Go to Profile
              </button>
            </div>
          ) : (
            <>
              <div className="quiz-progress-wrapper">
                <div className="quiz-progress-label">
                  <span>{lessonName}</span>
                  <span>
                    {currentQuestion + 1} / {questions.length}
                  </span>
                </div>
                <div className="quiz-progress-track">
                  <div
                    className="quiz-progress-fill"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="quiz-container">
                <div className="question-card-content" key={currentQuestion}>
                  <div className="question-counter">
                    Question {currentQuestion + 1}
                  </div>
                  <div className="question">
                    {questions[currentQuestion].question}
                  </div>
                  <div className="options">{renderOptions()}</div>
                  <div className="quiz-actions">
                    <span className="quiz-hint">
                      Tip: press <kbd>1</kbd>–<kbd>4</kbd> to pick,{" "}
                      <kbd>Enter</kbd> to continue
                    </span>
                    {currentQuestion < questions.length - 1 ? (
                      <button
                        onClick={handleNextClick}
                        className="quiz-btn quiz-btn-primary"
                        disabled={!isAnsweredCorrectly}
                      >
                        Next →
                      </button>
                    ) : (
                      <button
                        onClick={handleCompleteQuiz}
                        className="quiz-btn quiz-btn-success"
                        disabled={!isAnsweredCorrectly}
                      >
                        Complete Quiz
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
      <audio ref={correctAnswerAudioRef}>
        <source src="/media/success-correct-answer.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <audio ref={lessonCompletedAudioRef}>
        <source src="/media/success-lesson-completed.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <Footer />
    </>
  );
};

export default QuizQuestions;
