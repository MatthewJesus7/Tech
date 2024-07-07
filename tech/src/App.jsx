import HeroSection from "./components/sections/HeroSection"
import CardSection from "./components/sections/CardSection"
import ProductTypeSection from "./components/sections/ProductTypeSection";

import NavBar from "./components/layout/NavBar";
import Menu from "./components/layout/Menu";

import { useState } from "react";

function App() {

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


  return (
    <div className="App overflow-x-hidden">
      <NavBar handleOnClick={toggleMenu}></NavBar>

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
      />
      <HeroSection></HeroSection>
      <CardSection></CardSection>
      <ProductTypeSection></ProductTypeSection>
    </div>
  );
}

export default App;
