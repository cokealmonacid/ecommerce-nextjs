'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { imagesSlider } from '@/utils/data'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === imagesSlider.length - 1  ? 0 : prev + 1)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex flex-col h-[300px] md:h-[600px] lg:flex-row z-0">
      <div className="flex-1 w-full relative animate-fade-in-down">
        <Image src={imagesSlider[currentSlide].image} alt="" fill className="object-cover" />
      </div>
    </div>
  )
}

export default Slider