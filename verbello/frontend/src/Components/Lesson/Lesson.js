import React, { useState } from 'react';
import { Route,Routes, Link,Navigate ,useNavigate } from 'react-router-dom';
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import './Lesson.css';
import UnitLesson from './UnitLesson';


import LessonContent from './LessonContent';


function Lesson() {
    const [selectedLesson, setSelectedLesson] = useState(null);
    const navigate = useNavigate();

    // const lessonsData = [{
    //   Colors: [
    //     { imageUrl: blueImage, spanishName: 'Nombre en español 1' },
    //     { imageUrl: greenImage, spanishName: 'Nombre en español 2' },
    //     { imageUrl: orangeImage, spanishName: 'Nombre en español 3' },
    //     { imageUrl: yellowImage, spanishName: 'Nombre en español 4' },
    //     { imageUrl: pinkImage, spanishName: 'Nombre en español 5' },
    //     { imageUrl: purpleImage, spanishName: 'Nombre en español 6' },
    //     { imageUrl: redImage, spanishName: 'Nombre en español 7' },
    //     { imageUrl: turqoiseImage, spanishName: 'Nombre en español 8' },
    //   ],
    //   Fruits: [
    //     { imageUrl: avocadoImage, spanishName: 'Nombre en español 1' },
    //     { imageUrl: bananaImage, spanishName: 'Nombre en español 2' },
    //     { imageUrl: cherryImage, spanishName: 'Nombre en español 3' },
    //     { imageUrl: orangesImage, spanishName: 'Nombre en español 4' },
    //     { imageUrl: papayaImage, spanishName: 'Nombre en español 5' },
    //     { imageUrl: pineappleImage, spanishName: 'Nombre en español 6' },
    //     { imageUrl: watermelonImage, spanishName: 'Nombre en español 7' },
    //     { imageUrl: strawberryImage, spanishName: 'Nombre en español 8' },
    //   ],
    //   Vegetables: [
    //     { imageUrl: 'fruit1.jpg', spanishName: 'Nombre en español 1' },
    //     { imageUrl: 'fruit2.jpg', spanishName: 'Nombre en español 2' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 3' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 4' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 5' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 6' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 7' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 8' },
    //   ],
    //   Birds : [
    //     { imageUrl: 'fruit1.jpg', spanishName: 'Nombre en español 1' },
    //     { imageUrl: 'fruit2.jpg', spanishName: 'Nombre en español 2' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 3' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 4' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 5' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 6' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 7' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 8' },
    //   ],
    //   Animals: [
    //     { imageUrl: 'fruit1.jpg', spanishName: 'Nombre en español 1' },
    //     { imageUrl: 'fruit2.jpg', spanishName: 'Nombre en español 2' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 3' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 4' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 5' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 6' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 7' },
    //     { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 8' },
    //   ]},{
    //   Tenses: [
    //     { imageUrl: avocadoImage, spanishName: 'Nombre en español 1' },
    //     { imageUrl: bananaImage, spanishName: 'Nombre en español 2' },
    //     { imageUrl: cherryImage, spanishName: 'Nombre en español 3' },
    //     { imageUrl: orangesImage, spanishName: 'Nombre en español 4' },
    //     { imageUrl: papayaImage, spanishName: 'Nombre en español 5' },
    //     { imageUrl: pineappleImage, spanishName: 'Nombre en español 6' },
    //     { imageUrl: watermelonImage, spanishName: 'Nombre en español 7' },
    //     { imageUrl: strawberryImage, spanishName: 'Nombre en español 8' },
    //   ],
    //   Articles: [
    //     { imageUrl: avocadoImage, spanishName: 'Nombre en español 1' },
    //     { imageUrl: bananaImage, spanishName: 'Nombre en español 2' },
    //     { imageUrl: cherryImage, spanishName: 'Nombre en español 3' },
    //     { imageUrl: orangesImage, spanishName: 'Nombre en español 4' },
    //     { imageUrl: papayaImage, spanishName: 'Nombre en español 5' },
    //     { imageUrl: pineappleImage, spanishName: 'Nombre en español 6' },
    //     { imageUrl: watermelonImage, spanishName: 'Nombre en español 7' },
    //     { imageUrl: strawberryImage, spanishName: 'Nombre en español 8' },
    //   ],
    //   Adjectives: [
    //     { imageUrl: avocadoImage, spanishName: 'Nombre en español 1' },
    //     { imageUrl: bananaImage, spanishName: 'Nombre en español 2' },
    //     { imageUrl: cherryImage, spanishName: 'Nombre en español 3' },
    //     { imageUrl: orangesImage, spanishName: 'Nombre en español 4' },
    //     { imageUrl: papayaImage, spanishName: 'Nombre en español 5' },
    //     { imageUrl: pineappleImage, spanishName: 'Nombre en español 6' },
    //     { imageUrl: watermelonImage, spanishName: 'Nombre en español 7' },
    //     { imageUrl: strawberryImage, spanishName: 'Nombre en español 8' },
    //   ],
    //   Preposition: [
    //     { imageUrl: avocadoImage, spanishName: 'Nombre en español 1' },
    //     { imageUrl: bananaImage, spanishName: 'Nombre en español 2' },
    //     { imageUrl: cherryImage, spanishName: 'Nombre en español 3' },
    //     { imageUrl: orangesImage, spanishName: 'Nombre en español 4' },
    //     { imageUrl: papayaImage, spanishName: 'Nombre en español 5' },
    //     { imageUrl: pineappleImage, spanishName: 'Nombre en español 6' },
    //     { imageUrl: watermelonImage, spanishName: 'Nombre en español 7' },
    //     { imageUrl: strawberryImage, spanishName: 'Nombre en español 8' },
    //   ]
     
    // }];

    const lessonsData = [
      {
        unitTitle: 'Unit 1',
        unitSubtitle: 'Basic common use words',
        lessons: [
          {
            name: 'Colors',
            images: [
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
             { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
             { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' }
              // Add other image URLs and Spanish names for Colors
            ],
          },
          {
            name: 'Fruits',
            images: [
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
              { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' }
            ],
          },
          {
            name: 'Vegetables',
            images: [
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' }
            ],
          },
          {
            name: 'Birds',
            images: [
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' }
            ],
          },
          {
            name: 'Animals',
            images: [
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' }
            ],
          }

        ],
      },
      

      {
        unitTitle: 'Unit 2',
        unitSubtitle: 'Tenses and Verbs',
        lessons:  [
          {
            name: 'Tenses',
            images: [
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
             { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
             { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' }
            ],
          },
          {
            name: 'Articles',
            images: [
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' }
            ],
          },
          {
            name: 'Adjectives',
            images: [
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' }
            ],
          },
          {
            name: 'Preposition',
            images: [
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' }
            ],
          }

        ],
      },
      {
        unitTitle: 'Unit 3',
        unitSubtitle: 'Complex Sentences',
        lessons:  [
          {
            name: 'Simple Sentences',
            images: [
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' }
            ],
          },
          {
            name: 'Complex Sentences',
            images: [
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' }
            ],
          },
          {
            name: 'Real-life converstion',
            images: [
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
              { imageUrl: './imges/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' }
            ],
          }

        ],
      },
    ];
    

      const handleLessonClick = (lessonName) => {
      setSelectedLesson(lessonName);
      navigate(`/lesson/${lessonName}`);
    };
  
    return (
      <>
      < Navbar />
       <div className="App">
          <h2>Learn Units</h2>
          {selectedLesson ? (
            <LessonContent lessonName={selectedLesson} />
         ) : (
            lessonsData.map((unit, index) => (
              <div key={index}>
                <div className="lesson-container">
                  <div className="unit-tag">
                    <h3>{unit.unitTitle}</h3>
                    <span>{unit.unitSubtitle}</span>
                  </div>

                  {!selectedLesson && (
                    <div className="lesson-buttons">
                      {unit.lessons.map((lesson, lessonIndex) => (
                        <UnitLesson
                          key={lessonIndex}
                          lesson={lesson}
                          handleLessonClick={() => handleLessonClick(lesson.name)}
                        />
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))
         )}
      </div>
      <Footer />
      </>
    );
  
}

export default Lesson