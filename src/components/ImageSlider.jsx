import React, { useState } from 'react';
import Button from './Button';

import img1 from '../assets/images1.png';
import img2 from '../assets/images2.png';
import img3 from '../assets/images3.png';

const sliderImages = [
  { src: img1, alt: "Banner 1", desc: "The Studio : Winner of 8 Emmy® Awards" },
  { src: img2, alt: "Banner 2", desc: "Severance : Thriller · Winner of 8 Emmy® Awards" },
  { src: img3, alt: "Banner 3", desc: "Slow Horses : Thriller · Emmy® Award Winner" }
];

export default function ImageSlider() {
  const [curr, setCurr] = useState(0);

  const goPrev = () => setCurr((curr - 1 + sliderImages.length) % sliderImages.length);
  const goNext = () => setCurr((curr + 1) % sliderImages.length);

  const SLIDER_WIDTH = 1450;
  const SLIDER_HEIGHT = 800;

  return (
    <div
      className="relative overflow-hidden mx-auto"
      style={{ width: `${SLIDER_WIDTH}px`, height: `${SLIDER_HEIGHT}px` }}
    >
      {/* Invisible clickable left zone */}
      <div
        onClick={goPrev}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "15%",
          height: "100%",
          zIndex: 20,
          cursor: "pointer",
        }}
      ></div>

      {/* Invisible clickable right zone */}
      <div
        onClick={goNext}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "15%", 
          height: "100%",
          zIndex: 20,
          cursor: "pointer",
        }}
      ></div>

      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          width: `${sliderImages.length * SLIDER_WIDTH}px`,
          transform: `translateX(-${curr * SLIDER_WIDTH}px)`,
          height: `${SLIDER_HEIGHT}px`
        }}
      >
        {sliderImages.map((img, i) => (
          <div
            key={i}
            className="relative transition-transform duration-500 ease-in-out hover:scale-75 hover:shadow-2xl cursor-pointer"
            style={{ width: `${SLIDER_WIDTH}px`, height: `${SLIDER_HEIGHT}px` }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: 'cover',
                display: 'block'
              }}
              draggable={false}
            />
            <div className="absolute bottom-12 left-10 md:left-24 md:bottom-16 z-20 flex items-center space-x-6">
              <Button variant="ghost" className="px-7 py-3 text-lg">Stream now</Button>
              <span className="text-white text-lg font-semibold drop-shadow-md">
                {img.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
