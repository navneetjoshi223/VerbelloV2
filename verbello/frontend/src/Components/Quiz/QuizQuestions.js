import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import questions from '../../questions';
import './QuizQuestions.css';

const QuizQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Add or remove a class based on the location
    const body = document.body;
    if (location.pathname === '/quiz') {
      body.classList.add('quiz-page');
    } else {
      body.classList.remove('quiz-page');
    }

    // Cleanup effect
    return () => {
      body.classList.remove('quiz-page');
    };
  }, [location.pathname]);

  const handleOptionClick = (optionIndex) => {
    if (!showCorrectAnswer) {
      setSelectedOption(optionIndex);

      const isCorrect = optionIndex === questions[currentQuestion].correctAnswer;

      setShowCorrectAnswer(isCorrect);

      // Update the option's class based on correctness
      const optionElements = document.querySelectorAll('.option');
      optionElements.forEach((element, index) => {
        element.classList.remove('selected', 'correct', 'incorrect');

        if (index === optionIndex) {
          element.classList.add('selected');
        }

        if (isCorrect && index === questions[currentQuestion].correctAnswer) {
          element.classList.add('correct');
        }

        if (!isCorrect && index === optionIndex) {
          element.classList.add('incorrect');
        }
      });
    }
  };

  const handleNextClick = () => {
    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
        setShowCorrectAnswer(true);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setShowCorrectAnswer(false);

        // Clear the class styling for the options
        const optionElements = document.querySelectorAll('.option');
        optionElements.forEach((element) => {
          element.classList.remove('selected', 'correct', 'incorrect');
        });
      } else {
        handleCompleteQuiz();
      }
    }
  };

  const renderOptions = () => {
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;

    return questions[currentQuestion].options.map((option, index) => (
      <div
        key={index}
        className={`option ${
          selectedOption === index
            ? 'selected'
            : showCorrectAnswer && index === correctAnswerIndex
            ? 'correct'
            : ''
        }`}
        onClick={() => handleOptionClick(index)}
      >
        {option}
      </div>
    ));
  };

  const handleCompleteQuiz = () => {
    console.log('Quiz Completed!');
  };
  
  return (
    <div className="quiz-container card mx-auto mt-5" style={{ height: '500px', width: '400px' }}>
      <div className="card-body">
        <div className="question font-weight-bold">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="options">{renderOptions()}</div>
        </div>
        {currentQuestion < questions.length - 1 ? (
          <button
            onClick={handleNextClick}
            className="btn btn-primary mt-3"
          >
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
  );
};

export default QuizQuestions;
