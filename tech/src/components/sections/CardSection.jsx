import Section from "./Section"
import Carousel from "../layout/Carousel"
import Card from "../layout/Card"

function CardSection() {

    const carouselItems = [
        {
            title: "Item 1",
            price: "$10.00",
            backgroundImage: "url('/path/to/image1.jpg')"
        },
        {
            title: "Item 2",
            price: "$20.00",
            backgroundImage: "url('/path/to/image2.jpg')"
        },
        {
            title: "Item 3",
            price: "$30.00",
            backgroundImage: "url('/path/to/image3.jpg')"
        },
        {
            title: "Item 4",
            price: "$40.00",
            backgroundImage: "url('/path/to/image4.jpg')"
        },
        {
            title: "Item 5",
            price: "$50.00",
            backgroundImage: "url('/path/to/image5.jpg')"
        }
    ];

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