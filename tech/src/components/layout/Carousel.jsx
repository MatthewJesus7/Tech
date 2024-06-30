import React, { useState } from 'react';
import Container from '../layout/Container';
import Card from './Card';
import CarouselButton from "../items/Buttons/CarouselButton";

function Carousel({ items }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemWidth = 256;
    const marginWidth = 20;

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

    return(
        <Container customclass=" bg-blue-500 w-[110%] overflow-x-hidden">

            <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="w-full relative">

                <div className="flex"
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
