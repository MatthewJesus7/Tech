import Section from "./Section"
import Carousel from "../layout/Carousel"
import Card from "../layout/Card"

function CardSection() {

    const carouselItems = [
        {
            title: "celular x",
            price: "a partir de $10.00",
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
        <Section customclass="bg-gray-50 py-3 ">

            <h2 className="text-3xl font-bold">Veja Nossos Favoritos</h2>

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