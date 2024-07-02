import Link from '../items/Link'
import Button from '../items/Buttons/Button'
import Container from './Container'

function NavBar({ handleOnClick }) {

    return(
        <nav className=" h-10 justify-center content-center border px-5 ">

            <Container >

                <ul className="flex justify-between w-full z-50 ">

                    <li>
                        <Link href="#" text="DLM"></Link>
                    </li>

                    <div className='w-1/6'></div>

                    <li>
                        <Link href="#" target="_blank" text="Sobre"></Link>
                    </li>
                    <li>
                        <Button onClick={handleOnClick} text="pesquisar">
                            {/* {aparecerMenu ? 'Fechar Menu' : 'Abrir Menu'} */}
                        </Button>
                    </li>
                    <li>
                        <Link href="#" target="_blank" text="Carrinho"></Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar