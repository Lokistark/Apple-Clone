import React from 'react';
import ImageSlider from "./ImageSlider";
import Button from "./Button";

import image0002 from '../assets/image0002.jpg';
import image003 from '../assets/image003.png';
import imagec1 from '../assets/imagec1.png';
import imagec2 from '../assets/imagec2.png';
import imagec3 from '../assets/imagec3.png';
import imagec4 from '../assets/imagec4.png';
import imagec5 from '../assets/imagec5.png';
import imagec6 from '../assets/imagec6.png';

const gridProducts = [
  {
    image: imagec1,
    name: "Using Them Together",
    desc: "Apple devices work together so \nseamlessly, it almost feels like magic.",
    text: "text-black",
  },
  {
    image: imagec3,
    name: "Watch Series 11",
    desc: "The ultimate watch for the healthy life",
    text: "text-black",
  },
  {
    image: imagec4,
    name: "AirPods Pro 3",
    desc: "The world's best in-ear \nActive Noice Cancellation.",
    text: "text-black",
  },
  {
    image: imagec2,
    name: "iPadPro",
    desc: "Advanced AI Performance and \ngame-changing capabilities.",
    text: "text-white",
  },
  {
    image: imagec5,
    name: "MacBook Air",
    desc: "Sky blue colour. \nSky high performance with M4.",
    text: "text-black",
  },
  {
    image: imagec6,
    name: "iPhone Trade In",
    desc: "Upgrade and save. \nIt's that easy.",
    text: "text-black",
  },
];

export default function Section() {
  return (
    <div className="w-full">
      {/* Banner 1: iPhone Air */}
      <section className="relative w-screen h-[740px] md:h-[650px] overflow-hidden  ease-in-out hover:scale-110 hover:shadow-2xl
      cursor-pointer transition-transform duration-300 active:scale-100 active:shadow-2xl">
        <img
          src={image0002}
          alt="Banner 1"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute w-full flex flex-col items-center left-0 right-0" style={{ top: '16%', zIndex: 10 }}>
          <h2 className="text-3xl md:text-6xl font-bold mb-3 text-black text-center drop-shadow-xl">
            iPhone Air
          </h2>
          <p className="text-xl md:text-3xl mb-5 text-black text-center drop-shadow-lg">
            The Thinnest iPhone Ever.<br />
            With the Power of Pro inside.
          </p>
          <div className="flex gap-6  justify-center">
            <Button variant="primary">Learn more</Button>
            <Button variant="outline">Buy</Button>
          </div>
        </div>
      </section>

      {/* Banner 2: MacBook Pro */}
      <section className="relative w-screen h-[740px] md:h-[650px] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl
      cursor-pointer active:scale-100 active:shadow-2xl">
        <img
          src={image003}
          alt="Banner 2"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute w-full flex flex-col items-center left-0 right-0" style={{ top: '8%', zIndex: 10 }}>
          <h2 className="text-3xl md:text-6xl font-bold mb-3 text-white text-center drop-shadow-xl">
            MacBook Pro
          </h2>
          <p className="text-xl md:text-3xl mb-5 text-white text-center drop-shadow-lg">
            Supercharged by M5.
          </p>
          <div className="flex gap-6 justify-center">
            <Button variant="primary">Learn more</Button>
            <Button variant="outline">Buy</Button>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <div className="w-full py-12 bg-white">
        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:pl-9 md:pr-12">
          {gridProducts.map((prod, i) => (
            <div
              key={prod.name}
              className="relative rounded-3xl overflow-hidden h-[560px] flex items-end p-4 bg-white ease-in-out hover:scale-110 hover:shadow-2xl
              cursor-pointer transition-transform duration-500 active:scale-95 active:shadow-2xl"
              style={{ minWidth: "320px" }}
            >
              <div
                className="absolute top-0 left-0 w-full h-1/3 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom,rgba(255,255,255,0.96) 72%,transparent)"
                }}
              />
              <img
                src={prod.image}
                alt={prod.name}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                style={{ zIndex: 1 }}
              />
              <div
                className={`absolute z-10 w-full flex flex-col items-center ${prod.text} px-4 pt-16 pb-12`}
                style={{
                  top: 0, left: 0, right: 0, width: "100%",
                  borderRadius: '1.5rem'
                }}
              >
                <h2 className="font-bold text-3xl md:text-4xl mb-2 text-center leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,.15)]">{prod.name}</h2>
                <p className="text-lg md:text-xl mb-6 text-center whitespace-pre-line drop-shadow-[0_2px_12px_rgba(0,0,0,.10)]">{prod.desc}</p>
                <div className="flex gap-3">
                  <Button variant="primary" className="text-base">Learn more</Button>
                  <Button variant="outline" className="text-base">Buy</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ImageSlider />
    </div>
  );
}
