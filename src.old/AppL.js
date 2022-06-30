import React from 'react';
import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import './App.css';
import { playlist } from "./playlist";
import BoutiqueContext from './BoutiqueContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCart: false,
      playlistData: playlist,
      achat: [],
      addArticle: this.addArticle.bind(this),
      qteManager: this.qteManager.bind(this)
    }
  }

  // délcarations des méthodes de App
  qteManager(datakey, action) {
    console.log(datakey, action);
    let achatTmp = this.state.achat;
    // j'ajoute un disc à mon tableau achat
    console.log(typeof (action));
    if (action === "+") {
      console.log("rkevjbnv");
      achatTmp.push(datakey);
    }
    // je retire un disc à mon tableau achat
    this.setState({ achat: achatTmp });
  }

  addArticle(datakey) {
    /* console.log("click")
    console.log(datakey) */
    let achatTmp = this.state.achat;
    achatTmp.push(datakey);
    /*  console.dir(achatTmp); */
    this.setState({ achat: achatTmp });
    console.dir(this.state.achat)
  }

  handleClick() {
    this.setState({ displayCart: !this.state.displayCart });
  }
  render() {
    return (
      <BoutiqueContext.Provider value={this.state}>
        <div className="App">
          <header>
            <Menu action={() => { this.handleClick() }}></Menu>
          </header>
          <main>
            {/* 
        if(displayCart === true){
          <Cart/>
        } else {
          **
          est équivalent avec une ternaire
        }*/}
            {this.state.displayCart ? <Cart /> : ""}
            <Products listeDeLecture={this.state.playlistData}></Products>
          </main>
        </div>
      </BoutiqueContext.Provider>
    );
  }

}

export default App;