import React, { useState } from 'react';
import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import './App.css';
import { playlist } from "./playlist";
import BoutiqueContext from './BoutiqueContext';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayCart: false,
      playlistData: playlist,
      achat: [],
      addArticle: this.addArticle.bind(this),
      qteManager: this.qteManager.bind(this)
    }
  }
  stockManager(datakey, action) {
    let playlistDataTmp = this.state.playlistData;
    if (action === "+") {
      playlistDataTmp[datakey].qte--;
    } else {
      playlistDataTmp[datakey].qte++;
    }
    this.setState({ playlistData: playlistDataTmp });
  }
  //declarations des methodes de App
  qteManager(datakey, action) {
    //console.log(datakey,action);
    let achatTmp = this.state.achat;
    // j'ajoute un disc à mon tableau achat
    console.log(typeof(this.state.playlistData[datakey].qte));
    if (action === "+" && this.state.playlistData[datakey].qte > 0) {
      this.stockManager(datakey, action);
      achatTmp.push(datakey)
    }
    // je retire un disc à mon tableau achat
    if (action === "-") {
      this.stockManager(datakey, action);
      let stop = true;
      // array.includes(resultat) à verifier
      achatTmp.map((value, key) => {
        if (datakey == value && stop) {
          //console.log("decrementation")
          achatTmp.splice(key, 1);
          stop = false;
        }
      });
    }
    // 
    this.setState({ achat: achatTmp }, () => {
      //console.log("state modif")
    });
  }
  addArticle(datakey) {
    this.stockManager(datakey, "+");
    //console.log("click")
    //console.log(datakey)
    let achatTmp = this.state.achat;
    achatTmp.push(datakey);
    //console.dir(achatTmp);
    this.setState({ achat: achatTmp });
    //console.dir(this.state.achat)
  }
  handleClick() {
    this.setState({ displayCart: !this.state.displayCart });
  }
  render() {
    return (
      <BoutiqueContext.Provider value={this.state}>
        <div className="App">
          <header>
            <Menu action={() => { this.handleClick() }} />
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
            {this.state.displayCart ? <Cart /> : ""}
            <Products listeDeLecture={this.state.playlistData}></Products>
          </main>
        </div>
      </BoutiqueContext.Provider>
    );
  }
}

export default App;
