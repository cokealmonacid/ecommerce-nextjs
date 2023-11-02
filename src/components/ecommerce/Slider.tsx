"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { SliderProps } from "@/utils/interfaces";

const Slider = ({ imagesSlider }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === imagesSlider.length - 1  ? 0 : prev + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [imagesSlider]);

  return (
    <div className="flex flex-col h-[300px] md:h-[600px] lg:flex-row">
      <div className="flex-1 w-full relative animate-fade-in-down">
        <Image src={imagesSlider[currentSlide].image} alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Slider;