import React, { useContext } from 'react';
import BoutiqueContext from '../../BoutiqueContext';
import "./BuyBtn.css";

function BuyBtn(props){
    const data = useContext(BoutiqueContext);
    
    return <button 
    disabled={data.playlistData[props.datakey].qte ? false : true}
    onClick={()=> {data.addArticle(props.datakey)}}
    >
            {data.playlistData[props.datakey].qte ? "Acheter" : "Rupture"}<i className="fa-solid fa-cart-shopping"></i>
        </button>;
  }

  export default BuyBtn;
