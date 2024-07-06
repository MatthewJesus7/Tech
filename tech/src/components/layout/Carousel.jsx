import React, { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Container from '../layout/Container';
import Card from './Card';
import CarouselButton from "../items/Buttons/CarouselButton";

function Carousel({ items, customclass }) {
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

    const [showButton, setShowButton] = useState(false);

    function handleMouseOver() {
        setShowButton(true);
    }

    function handleMouseOut() {
        setShowButton(false);
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        carouselRef.current.style.transition = 'none';
    };

    const handleTouchMove = (e) => {
        const currentX = e.touches[0].clientX;
        const diff = touchStartX.current - currentX;
        touchEndX.current = currentX;
        carouselRef.current.style.transform = `translateX(-${currentIndex * (itemWidth + marginWidth) + diff}px)`;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;

        if (diff > 50) {
            handleNext();
        } else if (diff < -50) {
            handlePrev();
        }

        carouselRef.current.style.transition = ''; // Reaplica a transição após o swipe
        carouselRef.current.style.transform = `translateX(-${currentIndex * (itemWidth + marginWidth)}px)`;
    };

    return (
        <Container customclass={` w-[110%] overflow-x-hidden p-5 px-2.5 -ml-2.5 snap-mandatory ${customclass}`}>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="w-full relative cursor-pointer">
                <div className="flex transition-transform duration-500 snap-start"
                    style={{ transform: `translateX(-${currentIndex * (itemWidth + marginWidth)}px)` }}
                    ref={carouselRef} 
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}>
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
                    <CarouselButton customclass="left-5" text={<IoIosArrowBack />} onLeft={goToPreviousSlide} />
                )}
                {showButton && currentIndex < items.length - 1 && (
                    <CarouselButton customclass="right-5" text={<IoIosArrowForward />} onRight={goToNextSlide} />
                )}
            </div>
        </Container>
    );
}

export default Carousel;
