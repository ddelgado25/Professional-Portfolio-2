import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Welcome to my Portfolio'],
      typeSpeed: 85, // typing speed in milliseconds
      loop: false, // set to true to loop the animation
      showCursor: false, // disable cursor
    };

    const typed = new Typed(textRef.current, options);

    // Move the cursor element to align with the typed text
    const cursorElement = document.querySelector('.typed-cursor');
    cursorRef.current = cursorElement;

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    // Move the cursor element to align with the typed text
    const cursorElement = cursorRef.current;
    const textElement = textRef.current;

    if (cursorElement && textElement) {
      const textRect = textElement.getBoundingClientRect();
      cursorElement.style.transform = `translateY(${textRect.height}px)`;
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-home text-7xl font-bold mb-3">Hi, I'm David Delgado</h1>
            <p className="text-white text-4xl mb-8" ref={textRef}></p> {/* Use the ref here */}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            className="object-cover max-w-2xl mb-12"
            src="./images/portfolio-photo.png"
            alt="Portrait"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

