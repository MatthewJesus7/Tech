import React, { Children, useState } from 'react';
import Container from '../layout/Container';
import Card from './Card';
import CarouselButton from "../items/Buttons/CarouselButton";

function Carousel({ items, props}) {

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
        <Container customclass=" bg-blue-500 w-[109.7%] overflow-hidden">

            <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="w-full relative">

                <div className="flex overflow-hidden"
                style={{ transform: `translateX(-${currentIndex * (itemWidth + marginWidth)}px)` }}>

                    {items.map((item, index) => (

                        <Card key={index}
                            Children={props.child}>
                            {props.child}
                        </Card>
                    ))}

                </div>

                {showButton && <CarouselButton
                onLeft={goToPreviousSlide}
                onRight={goToNextSlide}/>}

            </div>

        </Container>
    );
}

export default Carousel;
