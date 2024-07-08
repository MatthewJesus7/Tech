import HeroSection from "./components/sections/HeroSection"
import CardSection from "./components/sections/CardSection"
import ProductTypeSection from "./components/sections/ProductTypeSection";
import CtaSection from "./components/sections/CtaSection";
import PartnersSection from "./components/sections/PartnersSection";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Menu from "./components/layout/Menu";
import Search from "./components/layout/MenuInner/Search";
import Cart from "./components/layout/MenuInner/Cart"

import { useState } from "react";

function Main() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [aparecerMenu, setAparecerMenu] = useState(false);
  
    const toggleMenu = () => {
        if (aparecerMenu) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
                setAparecerMenu(false);
            }, 500);
        } else {
            setAparecerMenu(true);
            setTimeout(() => {
                setIsAnimating(true);
            }, 0);
        }
    };
  
    // const [toggleSearch, setToggleSearch] = useState(false);
    // const [toggleCart, setToggleCart] = useState(false);
  
    // function toggleInnerMenu() {
    //   // toggleCart
    //   // toggleSearch
    // }
  
    return (
      <div className="overflow-x-hidden">
        <NavBar handleOnClick={toggleMenu
        // && toggleInnerMenu
      }
        // cSearch={setToggleSearch = () => true}
        // cCart={toggleCart}
        >
        </NavBar>
  
        <Menu
          handleOnClick={toggleMenu}
          customclass={` transform transition-all duration-1000 ${
              aparecerMenu
                  ? isAnimating
                      ? 'translate-y-0 bg-white h-96 '
                      : 'translate-y-0 h-96 '
                  : isAnimating
                  ? '  h-10 border-none -translate-y-1 '
                  : ' -translate-y-1 bg-white h-0 border-none '
          }`}
        >
          {/* <Search></Search>
          <Cart></Cart> */}
        </Menu>

        <HeroSection></HeroSection>

        <CardSection></CardSection>

        <ProductTypeSection></ProductTypeSection>

        <CtaSection></CtaSection>

        <PartnersSection></PartnersSection>
        
        <Footer></Footer>
      </div>
    );
}

export default Main