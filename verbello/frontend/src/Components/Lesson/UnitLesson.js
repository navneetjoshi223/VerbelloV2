import React from 'react';


const UnitLesson = ({ lesson, handleLessonClick , iscompleted=false}) => (
  <div onClick={handleLessonClick} className="lesson-item">
    <img className="fixed-image"
     src= {  iscompleted ? '/images/lessons/star-completed.png'   :  '/images/lessons/star.png'} alt="lesson" 
    title={iscompleted ? 'You already completed this lesson!' : null}
    />
    <span>{lesson.name}</span>
  </div>
);

export default UnitLesson;
