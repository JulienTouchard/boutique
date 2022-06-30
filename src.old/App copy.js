import React, { useState } from 'react';
import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import './App.css';
import { playlist } from "./playlist";
import BoutiqueContext from './BoutiqueContext';



function App(props) {
  // declaration de mes state
  const [displayCart, setDisplayCart] = useState(false);
  // j'ajoute à mes state la playliste importée 
  const [playlistData, setPlaylistData] = useState(playlist);

  // j'ajoute dans un tableau achat les produits achetés
  // a partir de leur index
  const [achat, setAchat] = useState([]);
  const addArticle = (datakey) => {
    console.log("click")
    setAchat([...achat,datakey]);
  }
  /* const [stateAddArticle,setStateAddArticle] = 
  useState((e)=>{addArticle(e)}); */
  const [stateAddArticle,setStateAddArticle] = useState();

  
  function handleClick() {
    setDisplayCart(!displayCart);
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
          <Menu action={() => { handleClick() }} />
        </header>
        <main>
          {/*
        if(displayCart === true){
          <Cart/>
        } else {
          ""
        }
        est equivalent avec une ternaire à :
        */}
          {displayCart ? <Cart /> : ""}
          <Products listeDeLecture={()=> {playlist()}}></Products>
        </main>
      </div>
    </BoutiqueContext.Provider>
  );
}

export default App;
