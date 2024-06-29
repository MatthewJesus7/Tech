import Section from "./Section"
import Carousel from "../layout/Carousel"
import Card from "../layout/Card"

function CardSection() {

    const carouselItems = [
                {card: <Card>a</Card>},
                {card: <Card>b</Card>},
                {card: <Card>c</Card>},
                {card: <Card>d</Card>},
                {card: <Card>e</Card>},
    ]

    return( 
        <Section>

            <h1>Titulo</h1>

            <Carousel items={carouselItems}></Carousel>
        </Section>
    )
}

export default CardSection

        {/* <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Button customClass="absolute top-1/3 translate-y-1/2 right-10 bg-black rounded-fullw-12 h-12 text-white " text="seta"></Button> */}