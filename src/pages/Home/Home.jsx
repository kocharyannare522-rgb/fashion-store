import "./Home.css";
import { useState } from "react";

export default function Home() {
  const images = [
    "/Images/Home/3.jpg",
    "/Images/Home/2.jpg",
    "/Images/Home/1.jpg",
    "/Images/Home/4.jpg",
    "/Images/Home/5.jpg",
    "/Images/Home/6.jpg",
    "/Images/Home/7.jpg",
    "/Images/Home/8.jpg",
    "/Images/Home/9.avif",
    "/Images/Home/10.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="nav-btn prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
          />
        </svg>
      </button>

      <div className="carousel-slide">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="home_img"
        />
      </div>

      <button onClick={nextSlide} className="nav-btn next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
          />
        </svg>
      </button>

      <div className="pagination">
        {images.map((v, i) => (
          <span key={i} className="dot" />
        ))}
      </div>
    </div>
  );
}
