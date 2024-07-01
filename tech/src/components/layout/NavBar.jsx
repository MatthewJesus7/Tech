import Link from '../items/Link'
import Container from './Container'

function NavBar( handleOnClick ) {

    return(
        <nav className="h-10 justify-center content-center border px-5">

            <Container>

                <ul className="flex justify-between w-full">

                    <li>
                        <Link href="#" text="DLM"></Link>
                    </li>

                    <div className='w-1/6'></div>

                    <li>
                        <Link href="#" target="_blank" text="Sobre"></Link>
                    </li>
                    <li onClick={handleOnClick}>
                        <p >Pesquisar</p>
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