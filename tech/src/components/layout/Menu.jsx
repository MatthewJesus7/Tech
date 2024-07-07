import XButton from "../items/Buttons/XButton"
import Container from "./Container"
import Carousel from "./Carousel"

const carouselItems = [
    {
        // link: "#",
        type: "medium_card",
        title: "celular x",
        price: "a partir de $10.00",
        backgroundImage: "url('/path/to/image1.jpg')"
    },
    {
        type: "medium_card",
        title: "Item 2",
        price: "$20.00",
        backgroundImage: "url('/path/to/image2.jpg')"
    },
    {
        type: "medium_card",
        title: "Item 3",
        price: "$30.00",
        backgroundImage: "url('/path/to/image3.jpg')"
    },
    {
        type: "medium_card",
        title: "Item 4",
        price: "$40.00",
        backgroundImage: "url('/path/to/image4.jpg')"
    },
    {
        type: "medium_card",
        title: "Item 5",
        price: "$50.00",
        backgroundImage: "url('/path/to/image5.jpg')"
    }
];



function Menu({  handleOnClick, customclass }) {
    return(
            <menu className={`fixed top-11 left-0 w-110 z-10 border shadow-xl overflow-hidden ${customclass}`}>
                <Container customclass=" px-[5%] py-[2.5%] flex-col ">

                    <div className=" w-full h-9">
                        <XButton handleOnClick={handleOnClick}>
                        </XButton>
                    </div>
    
                    <form className="mb-10">
                        <label htmlFor="isearch">
                            <input
                            className="bg-gray-100 w-2/3 h-8 rounded-lg p-1 border border-gray-300"
                            placeholder="lupinha"
                            type="text"
                            name="search"
                            id="isearch"
                            />
                        </label>
                    </form>

                    <h2>Você também pode gostar:</h2>
                    <Carousel items={carouselItems} />
                </Container>
            </menu>
    )
}
// absolute w-full h-[500px] bg-[#21758085] z-50
export default Menu