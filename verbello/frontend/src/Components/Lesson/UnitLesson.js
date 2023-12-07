import React from 'react';


const UnitLesson = ({ lesson, handleLessonClick }) => (
  <div onClick={handleLessonClick} className="lesson-item">
    <img className="fixed-image" src='/images/lessons/star.png' alt="lesson" />
    <span>{lesson.name}</span>
  </div>
);

export default UnitLesson;
