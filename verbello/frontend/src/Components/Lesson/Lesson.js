import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import "./Lesson.css";
import UnitLesson from "./UnitLesson";
import LessonContent from "./LessonContent";

function Lesson() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  //const [donelesson, setdonelesson] = useState({});
  const [lessonComplCount, setLessonComplCount] = useState(null);
  const { language } = useParams();
  const location = useLocation();
  const props = location.state;
  const navigate = useNavigate();
  let cumulativeLessonCount = 0; 

  useEffect(() => {
    // let  completedlesson=localStorage.getItem("completedlesson")

    // if(!completedlesson){
    //       completedlesson ={}
    // }
    // else{
    //   completedlesson= JSON.parse(completedlesson)
    // }

    // setdonelesson(completedlesson)
    let _id = window.sessionStorage.getItem("userId")
    let fetchData = async () => {
      try {
        let result = await axios.get(
          "http://localhost:2000/api/users/userdata",
          {
            params: {
              _id,
            },
          }
        );
        let userDatatemp = result.data.data;
        let coursesList = userDatatemp?.courses;
        let completionCount = coursesList.find(c => c.language === language)?.lessonsCompleted;
        setLessonComplCount(completionCount);
      } catch (e) {
        console.log(e);
      }
    };

    if(!props) {
      fetchData();
    } else {
      //console.log(props);
      let completionCount = props.coursesList.find(c => c.language === language)?.lessonsCompleted;
      setLessonComplCount(completionCount);
    }
    
  }, []);

  const lessonsData = [
    {
      unitTitle: "Unit 1",
      unitSubtitle: "Basic common use words",
      lessons: [
        {
          name: "Colors",
          images: [
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 1",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 2",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 3",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 4",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 5",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 6",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 7",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 8",
            },
            // Add other image URLs and Spanish names for Colors
          ],
        },
        {
          name: "Fruits",
          images: [
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 1",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 2",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 3",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 4",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 5",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 6",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 7",
            },
            {
              imageUrl: "./images/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 8",
            },
          ],
        },
        {
          name: "Vegetables",
          images: [
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 1",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 2",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 3",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 4",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 5",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 6",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 7",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 8",
            },
          ],
        },
        {
          name: "Birds",
          images: [
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 1",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 2",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 3",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 4",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 5",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 6",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 7",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 8",
            },
          ],
        },
        {
          name: "Animals",
          images: [
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 1",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 2",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 3",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 4",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 5",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 6",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 7",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 8",
            },
          ],
        },
      ],
    },

    {
      unitTitle: "Unit 2",
      unitSubtitle: "Tenses and Verbs",
      lessons: [
        {
          name: "Tenses",
          images: [
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 1",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 2",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 3",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 4",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 5",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 6",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 7",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 8",
            },
          ],
        },
        {
          name: "Articles",
          images: [
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 1",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 2",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 3",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 4",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 5",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 6",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 7",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 8",
            },
          ],
        },
        {
          name: "Adjectives",
          images: [
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 1",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 2",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 3",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 4",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 5",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 6",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 7",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 8",
            },
          ],
        },
        {
          name: "Preposition",
          images: [
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 1",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 2",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 3",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 4",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 5",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 6",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 7",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 8",
            },
          ],
        },
      ],
    },
    {
      unitTitle: "Unit 3",
      unitSubtitle: "Complex Sentences",
      lessons: [
        {
          name: "Simple Sentences",
          images: [
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 1",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 2",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 3",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 4",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 5",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 6",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 7",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 8",
            },
          ],
        },
        {
          name: "Complex Sentences",
          images: [
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 1",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 2",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 3",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 4",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 5",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 6",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 7",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 8",
            },
          ],
        },
        {
          name: "Real-life converstion",
          images: [
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 1",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 2",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 3",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 4",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 5",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 6",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 7",
            },
            {
              imageUrl: "./imges/lessons/fruits/avocado.jpg",
              spanishName: "Nombre en español 8",
            },
          ],
        },
      ],
    },
  ];

  const handleLessonClick = (lessonName) => {
    setSelectedLesson(lessonName);
    navigate(`/lesson/${language}/${lessonName}`);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <h2>Learn Units</h2>
        {selectedLesson ? (
          <LessonContent />
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
                    {unit.lessons.map((lesson, lessonIndex) => {
                      const iscompleted = cumulativeLessonCount < lessonComplCount;
                      const isDisabled = cumulativeLessonCount > lessonComplCount;
                      cumulativeLessonCount++;

                      return (
                        <UnitLesson
                          key={lessonIndex}
                          lesson={lesson}
                          handleLessonClick={() => handleLessonClick(lesson.name)}
                          iscompleted={iscompleted}
                          disabled={isDisabled}
                        />
                      );
                    })}
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

export default Lesson;
