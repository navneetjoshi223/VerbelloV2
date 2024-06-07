import React, { useEffect, useState } from "react";
import DisplayImage from "./DisplayImage";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./DisplayImage.css";
import "./LessonContent.css";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";

const LessonContent = () => {
  const [lessonContent, setLessonContent] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const [completedInitialSpeak, setCompletedInitialSpeak] = useState(false);
  const { language, lessonName } = useParams();

  useEffect(() => {
    // Make API call to fetch lesson data from MongoDB
    console.log(language, lessonName, "language & lesson name from params");
  
    let fetchLessonContent = async () => {
      try {
        let lesson = lessonName;
        let result = await axios.get("http://localhost:2000/api/qna/lessondata", {
          params: {
            language,
            lesson,
          }
        });
  
        let lessonContent = result.data.data;
        console.log("lesson content:", lessonContent);
        setLessonContent(lessonContent);
        speakAndExplainInitially(lessonContent);
      } catch (error) {
        console.error("Error fetching lesson data:", error);
      }
    };
  
    fetchLessonContent();
  }, [language, lessonName]);

  const speakAndExplainInitially = (lessonContent) => {
    lessonContent.forEach(content => {
      console.log(content.text);
      const utterance = new SpeechSynthesisUtterance(content.text);
      if(language === "Spanish") {
        utterance.lang = 'es-ES';
      } else if (language === "French") {
        utterance.lang = 'fr-FR';
      } else if (language === "German") {
        utterance.lang = 'de-DE';
      } else if(language === "Italian") {
        utterance.lang = 'it-IT';
      }
      utterance.onstart = () => {
        setIsSpeaking(true);
        setAudioStarted(true);
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        setAudioStarted(false);
      };
      window.speechSynthesis.speak(utterance);
      //setTimeout(2000);
    });
  };
  

  const [clickedImages, setClickedImages] = useState(new Set());

  const handleImageClick = (originalText) => {
    const updatedClickedImages = new Set(clickedImages);
    updatedClickedImages.add(originalText);
    setClickedImages(updatedClickedImages);
  };

  const allImagesClicked = lessonContent.every((image) =>
    clickedImages.has(image.text)
  );

  return (
    <>
      <Navbar />
      <div className="lesson-content-container m-3">
      <div className="text-center mb-4">
          <h3>Lesson: {lessonName}</h3>
          <h5 className="desctext">View all tiles to take the quiz.</h5>
        </div>
        <div className="image-container">
          {lessonContent.map((imageData, index) => (
            <div>
              <DisplayImage
                key={index}
                lang={language}
                imageUrl={imageData.imageUrl}
                originalText={imageData.text}
                englishName={imageData.englishTranslation}
                description={imageData.description}
                engDescription={imageData.engDescription}
                handleImageClick={handleImageClick}
                isClicked={clickedImages.has(imageData.text)}
              />
              {/* <p>{imageData.text}</p> */}
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
        <Link
          className="mx-auto"
          to={allImagesClicked ? `/quiz/${language}/${lessonName}` : "/"}
        >
          {/* Link to QuizQuestions */}
          <button className="btn btn-primary" disabled={!allImagesClicked}>
            Take a Quiz
          </button>
        </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LessonContent;
