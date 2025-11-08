import React from 'react';
import image01 from '../assets/image01.jpg';
import Button from './Button';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center bg-black text-white pt-10 pb-0 w-full">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">iPhone 17 Pro</h1>
      <p className="text-xl md:text-2xl mb-4">All out Pro.</p>

      <div className="flex gap-4 mb-5">
        <Button variant="primary">Learn more</Button>
        <Button variant="outline">Buy</Button>
      </div>

      <div className="w-full flex justify-center items-end transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer active:scale-100 active:shadow-2xl">
        <img
          src={image01}
          alt="iPhone 17 Pro"
          className="w-[55vw] max-w-5xl min-w-[240px] h-auto object-cover"
          style={{ display: "block", marginBottom: 0, boxShadow: "none", borderRadius: 0 }}
        />
      </div>
    </section>
  );
}








