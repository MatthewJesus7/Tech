import Button from "../items/Buttons/Button"

function Menu({  handleOnClick, customclass }) {
    return(
        <menu className={`fixed top-11 left-0 w-full z-10 border shadow-xl overflow-hidden ${customclass}`}>

            <Button onClick={handleOnClick} text="x"></Button>
            {/* <input type="text" /> */}
            <h2>Nossos produtos</h2>
            <ul>
                <li>a</li>
            </ul>
        </menu>
    )
}
// absolute w-full h-[500px] bg-[#21758085] z-50
export default Menu