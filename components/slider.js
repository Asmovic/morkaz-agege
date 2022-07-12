/* eslint-disable react/display-name */
import React, { useState, useEffect, useRef } from 'react'
import Typed from 'react-typed';
const carouselImages = [
    './images/morkaz.jpg',
    './images/mudir.jpg',
    './images/mosque1.jpg',
    './images/mosque2.jpg',
    './images/mosque3.jpg',
    './images/mosque4.jpg'
];
let count = 0;
let slideInterval;
export default function Slider(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim')
    }
    useEffect(()=>{
        slideRef.current.addEventListener('animationend', removeAnimation);
        slideRef.current.addEventListener('mouseenter', pauseSlider);
        slideRef.current.addEventListener('mouseleave', startSlider);
        startSlider();
        return () => {
            pauseSlider();
        }
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(()=> handleOnNextClick(), 3000);
    }

    const handleOnPrevClick = () => {
        const imageLength = carouselImages.length;

        count = (currentIndex + imageLength - 1) % imageLength;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    }

    const handleOnNextClick = () => {
        count = (count + 1) % carouselImages.length;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    }

    const pauseSlider = () => {
        clearInterval(slideInterval);
    }

    return (
        <div ref={slideRef} className="w-full select-none relative">
            <div className="aspect-w-16 aspect-h-9">
                <img src={carouselImages[currentIndex]} alt="image" />
            </div>
            <div className="absolute w-full top-1/2 transform z-10 -translate-y-1/2 px-3 flex justify-between items-center">
                <button onClick={handleOnPrevClick} className="bg-black text-white p-1 rounded-full bg-opacity-50 
                    cursor-pointer hover:bg-opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={handleOnNextClick} className="bg-black text-white p-1 rounded-full bg-opacity-50 
                    cursor-pointer hover:bg-opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="absolute w-full top-1/2 z-5 transform -translate-y-1/2 px-3 flex justify-center items-center">
                <h1 className="font-extrabold text-xl md:text-5xl lg:text-6xl">
                Salam Aleykun! <span className="text-md font-medium">👋</span>, Welcome to{' '}
                <span className="text-blue-500 shadow-md custom-box-shadow">
                    Morkaz.
                </span>
                <span className="block text-lg pt-4 md:text-4xl lg:text-4xl font-normal text-center">
                    <Typed
                    strings={[
                        "Committed To Excellence In Islamic Education",
                        "Opening doors through literacy.",
                    ]}
                    loop={true}
                    typeSpeed={50}
                    backSpeed={20}
                    backDelay={3000}
                    smartBackspace={false}
                    cursorChar={'_'}
                    />
                </span>
            </h1>
        </div>
        </div>
    )
}