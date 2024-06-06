import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './UnitLesson.css';

const UnitLesson = ({ lesson, handleLessonClick, iscompleted, disabled }) => {
  // const tooltip = <Tooltip id="tooltip"  >{iscompleted ? 'You already completed this lesson!' : 'Yet to complete'}</Tooltip>;

  return (
    <div onClick={handleLessonClick} className={`lesson-item ${disabled ? 'disabled' : ''}`} disabled={disabled}>
      <div>
        <img
          className="fixed-image"
          src={iscompleted ? '/images/lessons/star-completed.png' : '/images/lessons/star.png'}
          alt="lesson"
        />
        <span>{lesson.name}</span>
      </div>
    </div>
  );
};

export default UnitLesson;
