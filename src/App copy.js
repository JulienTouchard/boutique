import React, { useState } from 'react';
import Menu from "./Components/Menu/Menu";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart"
import './App.css';
import { playlist } from "./playlist";
import BoutiqueContext from './BoutiqueContext';



function App(props) {
  const [displayCart, setDisplayCart] = useState(false);
  const [playlistData, setPlaylistData] = useState(playlist);
  const [achat, setAchat] = useState([]);

  
  
  const addArticle = (datakey) => {
    console.log("click sur BuyBtn")
    setAchat([...achat,datakey]);
  }
  
  const [stateAddArticle,setstateAddArticle] = useState()



  function handleClick() {

    setDisplayCart(!displayCart)

  }

  return (
    <BoutiqueContext.Provider value={
      {
        playlistData: playlistData,
        achat: achat,
        stateAddArticle:stateAddArticle
      }
    }>
      <div className="App">
        <header>
          <Menu action={() => { handleClick() }}></Menu>
        </header>
        <main>
          {displayCart ? <Cart /> : ""}
          <Products listeDeLecture={playlist}> </Products>
        </main>
      </div>
    </BoutiqueContext.Provider>
  );
}

export default App;
