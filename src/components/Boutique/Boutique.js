import React, { useState } from 'react';
import './Boutique.css';
import dataBoutique from '../../dataBoutique.js';
import CardShop from '../CardShop/CardShop.js';

function Boutique() {
    // dataBoutiqueState =>getter | setDataBoutiquestate (fonction) setter
    // useState(valeur) assigne une valeur à mon state
    const [dataBoutiqueState, setDataBoutiqueState] = useState(dataBoutique);
    function decrease(id) {

        let tmp = dataBoutiqueState[id]
        tmp.qte--;
        setDataBoutiqueState([...dataBoutiqueState,tmp]);
        
        //dataBoutique[0].qte--;
    } 
    return (
        <div>
        
           {dataBoutiqueState.map((element,index)=>{
            console.log("sjhdgfjsdf")
            // element.id = index
            // spread operator => ...element,id:index
            return <CardShop key={index} data={{id:index,...element}} click={(e)=>decrease(e)}></CardShop>
           })}
           {/* {dataBoutiqueState.map((element,index)=><Card key={index} data={element}></Card>)} */}
        </div>
    )
}

const Mafonction = ()=>{
    // ici je peux ajouter plusieurs instruction contrairement à la 
    return <div>Ma fonction</div>
}
const Mafonction2 = ()=><div>Ma fonction12</div>

export default Boutique


