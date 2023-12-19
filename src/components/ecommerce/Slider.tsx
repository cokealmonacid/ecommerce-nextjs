"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { SliderProps } from "@/utils/interfaces";
import { ChevronLeft, ChevronRight } from "@/utils/icons";

const Slider = ({ imagesSlider }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = useCallback(() => setCurrentSlide(prev => prev === imagesSlider.length - 1  ? 0 : prev + 1), [imagesSlider.length]);
  const handleBack = useCallback(() => setCurrentSlide(prev => prev === 0  ? 0 : prev - 1), []);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 4000);
    return () => {
      clearInterval(interval);
    };
  }, [handleNext, imagesSlider]);

  return (
    <div className="flex relative h-[300px] md:h-[650px] lg:flex-row">
      <div className="flex-1 w-full h-full">
        <Image src={imagesSlider[currentSlide].image} className="object-cover" alt="" fill />
      </div>
      <div className="bg-gradient-to-b from-zinc-900/10 via-transparent to-zinc-900/10 absolute top-0 right-0 left-0 bottom-0"></div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {imagesSlider.map((_, i) => (
            <div key={i} className={`transition-all w-2 h-2 bg-white rounded-full  ${currentSlide === i ? "p-0.5" : "bg-opacity-50"}`} />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={handleBack} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
              <ChevronLeft />
          </button>
          <button onClick={handleNext} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
              <ChevronRight />
          </button>
      </div>
    </div>
  );
};

export default Slider;
