import Link from '../items/Link'

function NavBar() {
    return(
        <nav className="h-10 justi content-center border px-5">

            <ul className="flex justify-between max-w-7xl">
                <li><Link href="#" text="DLM"></Link></li>
                <div className='w-1/6'></div>
                <li><Link href="#" target="_blank" text="Sobre"></Link></li>
                <li><Link href="#" target="_blank" text="Pesquisar"></Link></li>
                <li><Link href="#" target="_blank" text="Carrinho"></Link></li>
            </ul>

        </nav>
    )
}

export default NavBar