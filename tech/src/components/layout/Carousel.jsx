import React, { useState, useEffect, useRef } from 'react';
import Container from '../layout/Container';
import Card from './Card';
import CarouselButton from "../items/Buttons/CarouselButton";

function Carousel({ items }) {

    // Botões de mover

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemWidth = 256;
    const marginWidth = 20;
    
    const carouselRef = useRef(null);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

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

        console.log('fui clicado!')
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
        <Container customclass=" w-[110] overflow-x-hidden pointer-events-auto p-5 px-2.5 ">

            <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            ref={carouselRef} 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className=" w-full relative cursor-pointer pointer-events-auto">

                <div className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * (itemWidth + marginWidth)}px)` }}>

                    {items.map((item, index) => (
                        <Card 
                        key={index}
                        title={item.title}
                        price={item.price}
                        backgroundImage={item.backgroundImage}
                        />
                    ))}

                </div>

                {showButton && currentIndex > 0 && (
                    <CarouselButton customclass="left-5" text="&#10094;" onLeft={goToPreviousSlide} />
                )}
                {showButton && currentIndex < items.length - 1 && (
                    <CarouselButton customclass="right-5" text="&#10095;" onRight={goToNextSlide} />
                )}

            </div>

        </Container>
    );
}

export default Carousel;
