import React, { useState } from 'react';

import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import './App.css';

function App(props) {
  const [displayCart, setDisplayCart] = useState(false);
  function handleClick(){
    setDisplayCart(!displayCart);
  }
  return (
    <div className="App">
      <header>
        <Menu action={()=>{handleClick()}}/>
      </header>
      <main>
        {/*
        if(displayCart === true){
          <Cart/>
        } else {
          ""
        }
        */}
        {displayCart ? <Cart/> : ""}
        <Products></Products>
      </main>
    </div>
  );
}

export default App;
