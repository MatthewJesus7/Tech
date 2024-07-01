import CardSection from "./components/sections/CardSection"

import NavBar from "./components/layout/NavBar";
import Menu from "./components/layout/Menu";
import { useState } from "react";

function App() {
  
  const [aparecerMenu, setAparecerMenu] = useState(false)

  function showMenu() {
    setAparecerMenu(true)
    console.log('Menu aparecendo!')
  }

  return (
    <div className="App overflow-x-hidden">
      <NavBar handleOnClick={showMenu}></NavBar>
      {aparecerMenu && <Menu></Menu>}
      <CardSection></CardSection>
    </div>
  );
}

export default App;
