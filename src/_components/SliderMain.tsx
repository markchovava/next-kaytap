"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { GoDotFill, GoDot } from "react-icons/go";
import { FaArrowRightLong, FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonPrimary } from './buttons/ButtonPrimary';

// TypeScript interfaces
interface SlideData {
  id: number;
  title: string;
  detail: string;
  img: string;
}

interface SwiperInstance {
  activeIndex: number;
  slideTo: (index: number) => void;
  slidePrev: () => void;
  slideNext: () => void;
}

// Dummy data
const SliderData: SlideData[] = [
  {
    id: 1,
    title: "Transform Your Business",
    detail: "Discover innovative solutions that will revolutionize your workflow and boost productivity. Our cutting-edge technology adapts to your unique business needs.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Digital Excellence",
    detail: "Experience the future of digital transformation with our comprehensive suite of tools designed to streamline operations and enhance customer satisfaction.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Innovation Hub",
    detail: "Join the ranks of industry leaders who trust our platform to drive growth and innovation. Unlock your potential with data-driven insights and analytics.",
    img: "https://images.unsplash.com/photo-1553028826-f4804151e596?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Smart Solutions",
    detail: "Leverage artificial intelligence and machine learning to automate processes and make smarter business decisions that propel your company forward.",
    img: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Global Reach",
    detail: "Expand your business globally with our scalable infrastructure and international support network. Connect with customers worldwide effortlessly.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Secure Platform",
    detail: "Your data security is our priority. Built with enterprise-grade security features and compliance standards to protect your valuable information.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
  },
  {
    id: 7,
    title: "Team Collaboration",
    detail: "Enhance teamwork with integrated collaboration tools that keep everyone connected and productive, no matter where they are located.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
  },
  {
    id: 8,
    title: "Future Ready",
    detail: "Stay ahead of the competition with forward-thinking solutions that adapt and evolve with changing market demands and technological advances.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  }
];

export default function SliderMain() {
  const [windowWidth, setWindowWidth] = useState<number>(1024); // Default to desktop
  const swiperRef = useRef<any>(null); // Simplified ref type
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const totalSlides: number = SliderData.length;

  const handleSlideChange = (swiper: any): void => {
    setActiveIndex(swiper.activeIndex);
  };

  // Handle direct pagination click
  const handlePaginationClick = (index: number): void => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  // Handle navigation
  const handlePrevClick = (): void => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = (): void => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    // Handle window resize
    const handleResize = (): void => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    // Set initial width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []); 

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        onSlideChange={handleSlideChange}
        navigation={false}
        pagination={false}
        className="w-full h-[30rem]"
      >
        {SliderData.map((i: SlideData, key) => (
          <SwiperSlide key={key} className='h-full w-full bg-blue-300'>
            <div className="w-[92%] h-full mx-auto flex flex-col items-start justify-center gap-3">
             <h2 className='text-[3rem] leading-tight'>{i.title}</h2>
             <p className='text-xl font-light w-[50%]'>{i.detail}</p>
            <ButtonPrimary 
              title='Buy Now' 
              css="text-white px-8 py-3" 
              iconCss='' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination dots */}
      <div className="hidden tems-center justify-center gap-3 mt-6">
        {SliderData.map((_, index: number) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className="pagination-dot focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50 rounded-full"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === activeIndex ? (
              <GoDotFill className="w-5 h-5 text-blue-900" />
            ) : (
              <GoDot className="w-5 h-5 text-gray-300 hover:text-gray-500" />
            )}
          </button>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute  bottom-[5%] left-[4%] transform -translate-y-1/2 z-10 flex items-center gap-2">
        <button 
          onClick={handlePrevClick}
          className="group carousel-button-prev p-2 rounded-full bg-blue-900 text-white hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-200"
          aria-label="Previous slide"
        >
          <FaCircleChevronLeft className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
        </button>

        <button 
          onClick={handleNextClick}
          className="group carousel-button-next p-2 rounded-full bg-blue-900 text-white hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-200"
          aria-label="Next slide"
        >
          <FaCircleChevronRight className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
        </button>
      </div>
    </div>
  );
};

