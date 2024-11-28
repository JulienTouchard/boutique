import React, { createContext, useState } from 'react'
import dataBoutique from '../dataBoutique';
const BoutiqueContext = createContext();

const BoutiqueProvider = (props) => {
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
            setStatePanier([...statePanier,id]);
        }
    }
    const [statePanier, setStatePanier] = useState([])
    console.dir(statePanier)
    return (
        <BoutiqueContext.Provider value={
            {
                'statePanier':statePanier,
                'dataBoutiqueState':dataBoutiqueState,
                'setStatePanier':setStatePanier,
                'setDataBoutiqueState':setDataBoutiqueState,
                'decrease': decrease
            }
        }>
            {props.children}
        </BoutiqueContext.Provider>
    )
}
export { BoutiqueContext, BoutiqueProvider}