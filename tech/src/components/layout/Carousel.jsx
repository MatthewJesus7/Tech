import React, { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Container from '../layout/Container';
import Card from './Card';
import CarouselButton from "../items/Buttons/CarouselButton";

function Carousel({ items, customclass }) {

    // Botões de mover

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemWidth = 256;
    const marginWidth = 20;
    
    const carouselRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const goToPreviousSlide = () => {
        const index = (currentIndex - 1 + items.length) % items.length;
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const index = (currentIndex + 1) % items.length;
        setCurrentIndex(index);
    };

    // Aparecer botão

    const [showButton, setShowButton] = useState(false);

    function handleMouseOver() {
        setShowButton(true);
    }

    function handleMouseOut() {
        setShowButton(false);
    }

    // Slides

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      };
    
      const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        carouselRef.current.style.transition = 'none'; // Remove a transição durante o swipe
      };
    
      const handleTouchMove = (e) => {
        const currentX = e.touches[0].clientX;
        const diff = touchStartX.current - currentX;
    
        carouselRef.current.style.transform = `translateX(-${currentIndex * 100 + diff}px)`;
      };
    
      const handleTouchEnd = () => {
        const diff = touchEndX.current - touchStartX.current;
    
        if (diff > 50) {
          handlePrev();
        } else if (diff < -50) {
          handleNext();
        }
    
        carouselRef.current.style.transition = ''; // Reaplica a transição após o swipe
        carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      };
    


    return(
        <Container customclass={` w-[109%] overflow-x-hidden pointer-events-auto p-5 px-2.5 -ml-2.5 ${customclass}`}>

            <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className=" w-full relative cursor-pointer pointer-events-auto ">

                <div className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * (itemWidth + marginWidth)}px)` }}
                ref={carouselRef} 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                >

                    {items.map((item, index) => (
                        <Card
                        type={item.type}
                        typeInner={item.typeInner}
                        key={index}
                        link={item.link}
                        target={item.target}
                        rel={item.rel}
                        title={item.title}
                        price={item.price}
                        backgroundImage={item.backgroundImage}
                        />
                    ))}

                </div>

                {showButton && currentIndex > 0 && (
                    <CarouselButton customclass="left-5 " text={<IoIosArrowBack/>} onLeft={goToPreviousSlide} />
                )}
                {showButton && currentIndex < items.length - 1 && (
                    <CarouselButton customclass="right-5 " text={<IoIosArrowForward/>} onRight={goToNextSlide} />
                )}

            </div>

        </Container>
    );
}

export default Carousel;
