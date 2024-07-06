import React, { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Container from '../layout/Container';
import Card from './Card';
import CarouselButton from "../items/Buttons/CarouselButton";

function Carousel({ items, customclass }) {
    const carouselRef = useRef(null);
    const [showButton, setShowButton] = useState(false);

    function handleMouseOver() {
        setShowButton(true);
    }

    function handleMouseOut() {
        setShowButton(false);
    }

    const handleTouchStart = (e) => {
        carouselRef.current.style.transition = 'none';
    };

    const handleTouchMove = () => {
        // Aqui você pode adicionar lógica se necessário para o movimento de toque
    };

    const handleTouchEnd = () => {
        carouselRef.current.style.transition = ''; // Reaplica a transição após o swipe
    };

    return (
        <Container customclass={`w-[109%] overflow-x-hidden p-5 px-2.5 -ml-2.5 ${customclass}`}>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="w-full relative cursor-pointer">
                <div
                    className="flex transition-transform duration-500 overflow-x-auto snap-x snap-mandatory"
                    ref={carouselRef} 
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {items.map((item, index) => (
                        <div key={index} className="snap-start">
                            <Card
                                type={item.type}
                                typeInner={item.typeInner}
                                link={item.link}
                                target={item.target}
                                rel={item.rel}
                                title={item.title}
                                price={item.price}
                                backgroundImage={item.backgroundImage}
                            />
                        </div>
                    ))}
                </div>

                {showButton && (
                    <>
                        <CarouselButton customclass="left-5" text={<IoIosArrowBack />} onLeft={() => { carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' }) }} />
                        <CarouselButton customclass="right-5" text={<IoIosArrowForward />} onRight={() => { carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' }) }} />
                    </>
                )}
            </div>
        </Container>
    );
}

export default Carousel;
