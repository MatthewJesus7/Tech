import Link from '../items/Link'
import Container from './Container'

import { IoIosSearch } from "react-icons/io";

function NavBar({ handleOnClick }) {

    return(
        <nav className="fixed h-10 justify-center content-center border w-full glass z-10">

            <Container customclass=" px-[5%] ">

                <ul className="flex justify-between w-full">

                    <li>
                        <Link href="#" text="DLM"></Link>
                    </li>

                    <div className='w-1/6'></div>

                    <li>
                        <Link href="#" target="_blank" text="Sobre"></Link>
                    </li>
                    
                    <li>
                        <Link href="#" target="_blank" text="Carrinho"></Link>
                    </li>

                    <li>
                        <Link onClick={handleOnClick} 
                        text={<IoIosSearch/>}
                        textCustom=" text-lg pt-1 "
                        ></Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar