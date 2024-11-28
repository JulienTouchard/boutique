import React, { useContext } from 'react'
import { BoutiqueContext } from '../../contexts/BoutiqueContext'


function Panier() {
    const boutiqueContext = useContext(BoutiqueContext);
    return (
        <div style={{ backgroundColor: "green" }}>
            <h4>Mon panier</h4>
            {boutiqueContext.statePanier.map(
                (element, index) => {
                    let article = boutiqueContext.dataBoutiqueState[element];
                    return (
                        <div key={index}>{
                            article.name
                        }</div>
                    )
                }
            )
            }
        </div>
    )
}

export default Panier


