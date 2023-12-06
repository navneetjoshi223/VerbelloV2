import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import your custom carousel CSS
//import image1 from '../../assets/images/portuguese/'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    './images/testimonials/testimonials-1.jpg',
    './images/testimonials/testimonials-2.jpg',
    './images/testimonials/testimonials-3.jpg',
    './images/testimonials/testimonials-4.jpg',
    './images/testimonials/testimonials-5.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel p-3">
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'dot active' : 'dot'}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
