"use client"
import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { ButtonPrimary } from '../buttons/ButtonPrimary';

const SlideData = [
  {
    id: 1,
    title: "Discover Amazing Places",
    description: "Explore breathtaking destinations around the world with our curated travel experiences.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=600&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Adventure Awaits",
    description: "Embark on thrilling adventures that will create memories to last a lifetime.",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1400&h=600&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Luxury & Comfort",
    description: "Experience the finest accommodations and services designed for your ultimate comfort.",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&h=600&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Cultural Immersion",
    description: "Dive deep into local cultures and traditions that will enrich your understanding of the world.",
    img: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1400&h=600&fit=crop&crop=center"
  }
];


// Text animation variants with proper typing
const textVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 1,
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] // Using bezier curve instead of string
    }
  }),
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { 
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1]
    } 
  }
};

export default function SliderPrimary() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const swiperRef = useRef(null);

  // Handle server-side rendering compatibility
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Custom navigation buttons
  const navigationPrevRef = React.useRef<HTMLButtonElement>(null);
  const navigationNextRef = React.useRef<HTMLButtonElement>(null);
  
  if (!isClient) {
    // Return a placeholder during server-side rendering
    return <div className="w-full h-[600px] bg-gray-200 animate-pulse relative" />;
  }

  return (
    <div className="relative w-full h-[34rem] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index: number, className: string) {
            return `
            <div className="hidden">
            <span class="${className} w-3 h-3 bg-white bg-opacity-50 rounded-full transition-all duration-300" style="margin: 0 5px;"></span>
            </div>
            `;
          }
        }}
        loop={true}
        speed={2000}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          // Update swiper instances after mounting
          setTimeout(() => {
            if (navigationPrevRef.current && navigationNextRef.current && swiper.params.navigation && typeof swiper.params.navigation === 'object') {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation?.init();
              swiper.navigation?.update();
            }
          });
        }}
        className="w-full h-full">
        
        { SlideData.map((slide, key) => (
          <SwiperSlide key={key} className="relative w-full h-full">
            
          
            <div className="absolute z-10 w-full h-full bg-black to-transparent"> 
            <Image 
              src={slide.img} 
              width={1400} 
              height={600} 
              className='w-full h-full object-cover' 
              alt='Image' />
            </div>
            <div className="absolute z-15 w-full h-full bg-gradient-to-br from-black to-transparent opacity-50" /> 
            
            {/* Text Content */}
            <AnimatePresence mode="wait">
              {activeIndex === SlideData.indexOf(slide) && (
                <div className="absolute inset-0 flex flex-col justify-center items-start p-12 z-20 text-white">
                  <motion.h2
                    custom={0}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-4xl md:text-5xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h2>        
                  <motion.p
                    custom={1}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-xl md:text-2xl mb-8 max-w-lg" >
                        {slide.description}
                  </motion.p>
                  <motion.div
                    custom={2}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit">
                      <ButtonPrimary title="View More" />
                  </motion.div>
                </div>
              )}
            </AnimatePresence>


          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons */}
      <div className="absolute bottom-16 right-12 z-20 flex space-x-4">
        <button
          ref={navigationPrevRef}
          className="group cursor-pointer w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300"
          aria-label="Previous slide"
        >
          <FaAngleLeft className="w-5 h-5 text-black group-hover:scale-125 ease-in-out transition-all duration-300" />
        </button>
        <button
          ref={navigationNextRef}
          className="group cursor-pointer w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300"
          aria-label="Next slide"
        >
          <FaAngleRight className="w-5 h-5 text-black group-hover:scale-125 ease-in-out transition-all duration-300" />
        </button>
      </div>
      
      {/* Slide indicator showing current slide / total slides */}
     {/*  <div className="absolute top-12 right-12 z-20 bg-black bg-opacity-30 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium">
        {activeIndex + 1} / {slideData.length}
      </div> */}
    </div>
  );
}