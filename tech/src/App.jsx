import CardSection from "./components/sections/CardSection"

import NavBar from "./components/layout/NavBar";
import Menu from "./components/layout/Menu";
import { useState } from "react";

function App() {
  
  const [isAnimating, setIsAnimating] = useState(false)
  const [aparecerMenu, setAparecerMenu] = useState(false);

  
  const toggleMenu = () => {
    setAparecerMenu(prevState => {
      const newState = !prevState;
  
      if (newState) {
        setIsAnimating(true);
        setTimeout(() => {
          setAparecerMenu(false);
        }, 1000);
        
      } else {
        setTimeout(() => {
          setIsAnimating(true);
        }, 0);
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }
  
      return newState;
    });
  };

  return (
    <div className="App overflow-x-hidden">
      <NavBar handleOnClick={toggleMenu}></NavBar>

      {aparecerMenu && <Menu menuVisible={toggleMenu}></Menu>}

      <CardSection></CardSection>
    </div>
  );
}

export default App;
