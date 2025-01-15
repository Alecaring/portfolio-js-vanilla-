import { useEffect, useState } from "react";
import "../scss/partials/slider.scss"; // Assicurati di avere il CSS giusto

const Slider = () => {
  const slides = [
    { id: 0, content: "slide 1" },
    { id: 1, content: "slide 2" },
    { id: 2, content: "slide 3" },
    { id: 3, content: "slide 4" },
    { id: 4, content: "slide 5" },
    { id: 5, content: "slide 6" },
    { id: 6, content: "slide 7" },
    { id: 7, content: "slide 8" },
    { id: 8, content: "slide 9" },
    { id: 9, content: "slide 10" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    console.log("Current Index:", currentIndex);
  }, [currentIndex]);

  return (
    <div className="container-slider">
      <div className="slider-wrapper">
        <div
          className="slider"
          style={{
            transform: `rotateX(-${(360 / slides.length) * currentIndex}deg)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{
                transform: `rotateX(${(360 / slides.length) * index}deg) translateZ(250px)`,
                opacity: index === currentIndex ? 1 : 0.5, // Opacità per evidenziare la slide attiva
              }}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
