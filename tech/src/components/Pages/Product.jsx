import HalfHeroSection from "../sections/HalfHeroSection"
import Section from "../sections/Section";
import Container from "../layout/Container";
import Carousel from "../layout/Carousel"
import Card from "../layout/Card";

function Product() {

    const carouselItems = [
        {
            link: "../Pages/Product",
            type: "card",
            title: "celular x",
            price: "a partir de $10.00",
            backgroundImage: "url('/path/to/image1.jpg')"
        },
        {
            type: "card",
            title: "Item 2",
            price: "$20.00",
            backgroundImage: "url('/path/to/image2.jpg')"
        },
        {
            type: "card",
            title: "Item 3",
            price: "$30.00",
            backgroundImage: "url('/path/to/image3.jpg')"
        },
        {
            type: "card",
            title: "Item 4",
            price: "$40.00",
            backgroundImage: "url('/path/to/image4.jpg')"
        },
        {
            type: "card",
            title: "Item 5",
            price: "$50.00",
            backgroundImage: "url('/path/to/image5.jpg')"
        }
    ];

    return(
        <div>
            <HalfHeroSection></HalfHeroSection>
            <Section>
                <Carousel items={carouselItems}
                ></Carousel>
            </Section>
            
            <Section customclass=" flex flex-wrap ">

                <div className="w-full max-w-[868px] mr-5 mb-5">
                    <Card customclass=" big_card "></Card>
                </div>

                <Card customclass="card mb-5"></Card>
                <Card customclass="card mb-5"></Card>
                <Card customclass="card mb-5"></Card>
                <Card customclass="card mb-5"></Card>

            </Section>
            
        </div>
    )
}

export default Product