import React, { useState, useEffect } from 'react';
import dog1Image from '../assets/dog1.png';
import dog2Image from '../assets/dog2.png';
import dog3Image from '../assets/dog3.png';

const texts = ["Taking Care", "Care for your", "for your pet"];

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000); // Change text every 6 seconds

    return () => {
      clearInterval(textInterval); // Clear interval on component unmount
    };
  }, []);

  return (
    <section className="bg-custom bg-yellow-50 py-16 flex justify-center items-center h-screen overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in">
            {texts[currentTextIndex]}
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center relative h-full">
          <img
            src={dog1Image}
            alt="Image 1"
            className="absolute image-1 w-1/2 sm:w-1/3 md:w-1/4 h-auto rounded-lg shadow-lg animate-image-1"
          />
          <img
            src={dog2Image}
            alt="Image 2"
            className="absolute image-2 w-1/2 sm:w-1/3 md:w-1/4 h-auto rounded-lg shadow-lg animate-image-2"
          />
          <img
            src={dog3Image}
            alt="Image 3"
            className="absolute image-3 w-1/2 sm:w-1/3 md:w-1/4 h-auto rounded-lg shadow-lg animate-image-3"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
