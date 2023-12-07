import React, { useState, useEffect } from "react";
//import { useLocation } from "react-router-dom";

import questions from "../../questions";
import "./QuizQuestions.css";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";

const QuizQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  /** Navneet's useStates */
  const[isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);


  useEffect(() => {
    console.log('isAnsweredCorrectly? ', isAnsweredCorrectly);
  }, [isAnsweredCorrectly]);

  const handleOptionClick = (optionIndex) => {
      setSelectedOption(optionIndex);
      const isCorrect = optionIndex === questions[currentQuestion].correctAnswer;
      setIsAnsweredCorrectly(isCorrect);
  };

  const handleNextClick = () => {
    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
        //setShowCorrectAnswer(true);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        //setShowCorrectAnswer(false);

        // Clear the class styling for the options
        const optionElements = document.querySelectorAll(".option");
        optionElements.forEach((element) => {
          element.classList.remove("selected", "correct", "incorrect");
        });
        setIsAnsweredCorrectly(false);
      } else {
        handleCompleteQuiz();
      }
    }
  };

  const renderOptions = () => {

    return questions[currentQuestion].options.map((option, index) => (
      <div
        key={index}
        className={`option m-2 ${(selectedOption === index) ? (isAnsweredCorrectly ? 'correct' : 'incorrect') : 'null' }`}
        onClick={() => handleOptionClick(index)}
      >
        {option}
      </div>
    ));
  };

  const handleCompleteQuiz = () => {
    console.log("Quiz Completed!");
  };

  return (
    <>
      <Navbar />
      <div
        className="quiz-container card m-5"
        // style={{ height: "500px", width: "400px" }}
      >
        <div className="card-body">
          <div className="question font-weight-bold">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="question-and-options">
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
            <div className="options">{renderOptions()}</div>
          </div>
          {currentQuestion < questions.length - 1 ? (
            <button onClick={handleNextClick} className="btn btn-primary mt-3" disabled={!isAnsweredCorrectly}>
              Next
            </button>
          ) : (
            <button
              onClick={handleCompleteQuiz}
              className="btn btn-success mt-3"
            >
              Complete Quiz
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuizQuestions;
