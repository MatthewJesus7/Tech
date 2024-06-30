import Container from "../../layout/Container"

function CarouselButton({ onRight, onLeft, customclass, text }) {
    return(
        <Container>
            <button onClick={onLeft || onRight} className={`carousel_button ${customclass}`}>
                <p>{text}</p>
            </button>
        </Container>
    )
}

export default CarouselButton