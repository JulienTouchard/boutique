import React, { useState } from 'react';
import Menu from "./Components/Menu/Menu";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart"
import './App.css';
import { playlist } from "./playlist";

import BoutiqueContext from './BoutiqueContext';
import Player from './Components/Player/Player';



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

stockManager(datakey,action){
  let playlistDataTmp = this.state.playlistData;
  if(action == "+"){
    playlistDataTmp[datakey].qte--;
  } else {
    playlistDataTmp[datakey].qte++;
  }
  this.setState({playlistData: playlistDataTmp});
}

  qteManager(datakey,action){
    
    let achatTmp = this.state.achat;

    console.log(typeof(this.state.playlistData[datakey].qte));
    if(action === "+" && this.state.playlistData[datakey].qte > 0){
      this.stockManager(datakey,action);
      achatTmp.push(datakey)
    }

    if(action === "-"){
      this.stockManager(datakey,action);
      let stop = true;

      achatTmp.map((value,key) => {
        if(datakey = value && stop){
          achatTmp.splice(key,1);
          stop = false;
        }
      });
      
    }

    this.setState({achat: achatTmp});
  }

  addArticle(datakey){
    this.stockManager(datakey,"+")
    let achatTmp = this.state.achat;
    achatTmp.push(datakey);
   
    this.setState({achat:achatTmp});
    
  }
  

  handleClick() {
    this.setState({displayCart:!this.state.displayCart});
  }

  render() {
    return (
      <BoutiqueContext.Provider value={this.state}>
        <div className="App">
          <header>
            <Menu action={() => { this.handleClick() }}></Menu>
          </header>
          <main>
            {this.state.displayCart ? <Cart /> : ""}
            <Products listeDeLecture={this.state.playlistData}> </Products>
          </main>
        </div>
        <Player></Player>
      </BoutiqueContext.Provider>
    );
  }

 
}


export default App;
