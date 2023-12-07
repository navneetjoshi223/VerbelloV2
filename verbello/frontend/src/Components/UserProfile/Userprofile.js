// Userprofile.jsx

import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import golden from '../../assets/images/Badges/gold.jpeg' ;
import silver from '../../assets/images/Badges/silve.jpeg' ;
import bronze from '../../assets/images/Badges/bronz.jpeg' ;

import './UserProfile.css'; // Import the CSS file for user profile styling

function Userprofile() {
  const courses = [
    { language: 'French', imageUrl: './images/flags/france.jpeg', isActive: true, completion: 60 },
    { language: 'Spanish', imageUrl: './images/flags/spain.jpeg', isActive: true, completion: 40 },
    { language: 'Germany', imageUrl: './images/flags/germany.jpeg', isActive: true, completion: 80 },
    { language: 'Italy', imageUrl: './images/flags/italy.jpeg', isActive: false, completion: 10 },
    { language: 'Portugal', imageUrl: './images/flags/portugal.jpeg', isActive: false, completion: 30 },
    // Add more course data as needed
  ];

  const activeCourses = courses.filter(course => course.isActive);
  const inactiveCourses = courses.filter(course => !course.isActive);

  return (
    <>
    <div className='active-in'>
      <div className="active-courses">
        <h3>Your Active Courses</h3>
        <div className="card-container">
          {activeCourses.map((course, index) => (
            <Card key={index} >
            <div className='active-card'>

            <div>
              <Card.Body>
                <Card.Title>{course.language}</Card.Title>
                <Card.Img  className='card-im' variant="top" src={course.imageUrl} alt={`${course.language} flag`} />
              </Card.Body>
              </div>
              <div  className="progress-container">
            <ProgressBar now={course.completion} label={`${course.completion}%`} />
                <div className="badges">
                {course.completion > 75 && (
                        <img className="badg" src={golden} alt="Golden Badge" />
                      )}
                      {course.completion > 50 && (
                        <img className="badg" src={silver} alt="Silver Badge" />
                      )}
                      {course.completion > 25 && (
                        <img className="badg" src={bronze} alt="Bronze Badge" />
                      )}
                </div>
            </div>
            </div>

            </Card>
              
          ))}
        </div>
      </div>

      {/* Inactive courses section */}
      < div className="inactive-courses">
        <h3>Enroll in New Courses</h3>
        <div className="card-container">
          {inactiveCourses.map((course, index) => (
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{course.language}</Card.Title>
                <div className="round-image">
                  <Card.Img variant="top" src={course.imageUrl} alt={`${course.language} flag`} />
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Userprofile;
