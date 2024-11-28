import React, { useState } from 'react';
import './Boutique.css';
import dataBoutique from '../../dataBoutique.js';
import CardShop from '../CardShop/CardShop';

function Boutique() {
    console.log("Bonjour");
    // dataBoutiqueState =>getter | setDataBoutiquestate (fonction) setter
    // useState(valeur) assigne une valeur à mon state
    const [dataBoutiqueState, setDataBoutiqueState] = useState(dataBoutique);
    const decrease = (id) => {
        /* let tmp = dataBoutiqueState[id]
        tmp.qte--; */
        // let tmpArray = dataBoutiqueState // ne fonctionne pas car dataBoutiqueState
        // est immutable
        /* 1ere  solution en utilisant un spread operator 
        je crée un nouveau tableau et y insere toutes les valeurs
        de dataBoutiqueState */
        //let tmpArray = [...dataBoutiqueState];
        /* 2e  solution en utilisant un map sur dataBoutiqueState
       je stoque toutes ses valeurs dans un nouveau tableau  */
        if (dataBoutiqueState[id].qte > 0) {
            let tmpArray = dataBoutiqueState.map(e => e)
            tmpArray[id].qte--;
            setDataBoutiqueState(tmpArray);
        }
        console.log(dataBoutiqueState[id].qte);
    }
    return (
        <div className='card-container'>

            {dataBoutiqueState.map((element, index) => {
                console.log("sjhdgfjsdf")
                // element.id = index
                // spread operator => ...element,id:index
                return <CardShop key={index} data={{ id: index, ...element }} click={(e) => decrease(e)}></CardShop>
            })}
            {/* {dataBoutiqueState.map((element,index)=><Card key={index} data={element}></Card>)} */}
        </div>
    )
}

const Mafonction = () => {
    // ici je peux ajouter plusieurs instruction contrairement à la 
    return <div>Ma fonction</div>
}
const Mafonction2 = () => <div>Ma fonction12</div>

export default Boutique


