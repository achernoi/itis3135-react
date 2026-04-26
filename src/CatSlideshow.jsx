import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import './styles/default.css';

export default function CatSlideshow() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const intervalRef = useRef(null);

  // Fetch images from Cat API
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  // Handle autoplay
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === images.length - 1) {
            clearInterval(intervalRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, images]);

  // Controls
  const next = () => {
    setCurrentIndex(i => Math.min(i + 1, images.length - 1));
  };

  const prev = () => {
    setCurrentIndex(i => Math.max(i - 1, 0));
  };

  const first = () => setCurrentIndex(0);
  const last = () => setCurrentIndex(images.length - 1);

  const play = () => setIsPlaying(true);

  const stop = () => {
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  if (!images.length) return <p>Loading cats...</p>;

  return (
    <>
      <Header />
        <main>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <h2 style={{textAlign: "center"}}>Cat Slideshow 🐱</h2>

            <img
              src={images[currentIndex].url}
              alt="cat"
              width="450"
              height="450"
              style={{ borderRadius: "10px" }}
            />

            <p style={{textAlign: "center"}}>
              {currentIndex + 1} / {images.length}
            </p>

            <div>
              <button onClick={first}>First</button>
              <button onClick={prev} disabled={currentIndex === 0}>
                Previous
              </button>
              <button
                onClick={next}
                disabled={currentIndex === images.length - 1}
              >
                Next
              </button>
              <button onClick={last}>End</button>
            </div>

            <div style={{ marginTop: "10px" }}>
              <button onClick={play} disabled={isPlaying}>
                Play
              </button>
              <button onClick={stop}>Stop</button>
            </div>
          </div>
    </main>
    <Footer />
    </>
  );
}