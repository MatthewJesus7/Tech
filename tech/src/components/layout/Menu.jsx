import Button from "../items/Buttons/Button"

function Menu({ isAnimating, menuVisible }) {
    return(
        <menu className={` transition-all 
        ${isAnimating ?
        `'bg-red-500'`
        : 'h-96'
        }
        ${menuVisible ? 'block' : 'hidden'}
        `} >


            <Button onClick={menuVisible} text="x"></Button>
            <input type="text" />
            <h2>Nossos produtos</h2>
            <ul>
                <li>a</li>
            </ul>
        </menu>
    )
}
// absolute w-full h-[500px] bg-[#21758085] z-50
export default Menu