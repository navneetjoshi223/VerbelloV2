import React , {useEffect, useState} from 'react';
import DisplayImage from './DisplayImage';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import './DisplayImage.css';


const LessonContent = () => {

  const [lessonContent, setLessonContent] = useState([]);
  const { language, lessonName } = useParams();

  useEffect(() => {
    //Make API call to fetch lesson data from MongoDB
    console.log(language, lessonName, "language & lesson name from params");
      let fetchLessonContent = async () => {
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
      };
  
      fetchLessonContent();
  }, [language, lessonName]);


  //const imagesData = lessonsData[lessonName] || [];
  const [clickedImages, setClickedImages] = useState(new Set());

  const handleImageClick = (originalText) => {
    const updatedClickedImages = new Set(clickedImages);
    updatedClickedImages.add(originalText);
    setClickedImages(updatedClickedImages);
  };

  
  //logic to enable button if all images clicked  (by aum)
  const allImagesClicked = lessonContent.every((image) => clickedImages.has(image.text));

  return (
    <>
    <h2>{lessonName}</h2>
    <div className="image-container">
    {lessonContent.map((imageData, index) => (
      <div>
      <DisplayImage
        key={index}
        imageUrl={imageData.imageUrl}
        originalText={imageData.text}
        englishName={imageData.englishTranslation}
        description={imageData.description}
        engDescription={imageData.engDescription}
        handleImageClick={handleImageClick}
        isClicked={clickedImages.has(imageData.text)}
      />
      <p>{imageData.text}</p>
      </div>
    ))}
  </div>
  <Link to={allImagesClicked ? `/quiz/${lessonName}` : '/'}> {/* Link to QuizQuestions */}
        <button className="btn btn-primary" disabled={!allImagesClicked}>
          Take a Quiz
        </button>
      </Link>
  </>
  );
};

export default LessonContent;
