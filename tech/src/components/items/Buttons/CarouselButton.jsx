import Container from "../../layout/Container"

function CarouselButton({ onRight, onLeft }) {
    return(
        <Container>
            <button onClick={onLeft} className="carousel_button left-5">
                <p>&#10094;</p>
            </button>

            <button onClick={onRight} className="carousel_button right-5">
                <p>&#10095;</p>
            </button>
        </Container>
    )
}

export default CarouselButton