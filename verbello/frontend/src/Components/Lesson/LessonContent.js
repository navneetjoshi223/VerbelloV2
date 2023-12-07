import React , {useState} from 'react';
import DisplayImage from './DisplayImage';
import { Link } from 'react-router-dom';
import './DisplayImage.css';

const lessonsData = {
  Colors: [
    { imageUrl: '/images/lessons/colors/blue.png', spanishName: 'Nombre en español 1' },
    { imageUrl: '/images/lessons/colors/green.png', spanishName: 'Nombre en español 2' },
    { imageUrl: '/images/lessons/colors/orange.png', spanishName: 'Nombre en español 3' },
    { imageUrl: '/images/lessons/colors/pink.png', spanishName: 'Nombre en español 4' },
    { imageUrl: '/images/lessons/colors/purple.png', spanishName: 'Nombre en español 5' },
    { imageUrl: '/images/lessons/colors/red.png', spanishName: 'Nombre en español 6' },
    { imageUrl: '/images/lessons/colors/turqoise.png', spanishName: 'Nombre en español 7' },
    { imageUrl: '/images/lessons/colors/yellow.png', spanishName: 'Nombre en español 8' },
  ],
  Fruits: [
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
    { imageUrl: '/images/lessons/fruits/banana.webp', spanishName: 'Nombre en español 2' },
    { imageUrl: '/images/lessons/fruits/cherry.jpg', spanishName: 'Nombre en español 3' },
    { imageUrl: '/images/lessons/fruits/oranges.jpg', spanishName: 'Nombre en español 4' },
    { imageUrl: '/images/lessons/fruits/papaya.jpg', spanishName: 'Nombre en español 5' },
    { imageUrl: '/images/lessons/fruits/pineapple.jpg', spanishName: 'Nombre en español 6' },
    { imageUrl: '/images/lessons/fruits/strawberry.jpg', spanishName: 'Nombre en español 7' },
    { imageUrl: '/images/lessons/fruits/watermelon.jpg', spanishName: 'Nombre en español 8' },
  ],
  Vegetables: [
    { imageUrl: 'fruit1.jpg', spanishName: 'Nombre en español 1' },
    { imageUrl: 'fruit2.jpg', spanishName: 'Nombre en español 2' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 3' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 4' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 5' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 6' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 7' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 8' },
  ],
  Birds : [
    { imageUrl: 'fruit1.jpg', spanishName: 'Nombre en español 1' },
    { imageUrl: 'fruit2.jpg', spanishName: 'Nombre en español 2' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 3' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 4' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 5' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 6' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 7' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 8' },
  ],
  Animals: [
    { imageUrl: 'fruit1.jpg', spanishName: 'Nombre en español 1' },
    { imageUrl: 'fruit2.jpg', spanishName: 'Nombre en español 2' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 3' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 4' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 5' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 6' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 7' },
    { imageUrl: 'color2.jpg', spanishName: 'Nombre en español 8' },
  ],
  Tenses: [
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' },
  ],
  Articles: [
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
    { imageUrl: '/images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' },
  ],
  Adjectives: [
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' },
  ],
  Preposition: [
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 1' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 2' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 3' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 4' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 5' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 6' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 7' },
    { imageUrl: './images/lessons/fruits/avocado.jpg', spanishName: 'Nombre en español 8' },
  ]
 
};


const LessonContent = ({ lessonName }) => {
  const imagesData = lessonsData[lessonName] || [];
  const [clickedImages, setClickedImages] = useState(new Set());

  const handleImageClick = (spanishName) => {
    const updatedClickedImages = new Set(clickedImages);
    updatedClickedImages.add(spanishName);
    setClickedImages(updatedClickedImages);
  };

  

  const allImagesClicked = imagesData.every((image) => clickedImages.has(image.spanishName));

  return (
    <>
    <h2>{lessonName}</h2>
    <div className="image-container">
    {imagesData.map((imageData, index) => (
      <div>
      <DisplayImage
        key={index}
        imageUrl={imageData.imageUrl}
        spanishName={imageData.spanishName}
        handleImageClick={handleImageClick}
        isClicked={clickedImages.has(imageData.spanishName)}
      />
      <p>{imageData.spanishName}</p>
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
