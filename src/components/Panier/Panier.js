import React, { useContext } from 'react'
import { BoutiqueContext } from '../../contexts/BoutiqueContext'
import ArticlePanier from '../ArticlePanier/ArticlePanier';


function Panier() {
    const boutiqueContext = useContext(BoutiqueContext);
    
    return (
        <div style={{ backgroundColor: "green" }}>
            <h4>Mon panier</h4>
            {
                boutiqueContext.statePanier.length > 0 ?
                boutiqueContext.statePanier.map(
                (element, index) => {
                    return (
                        <ArticlePanier key={index} id={element}></ArticlePanier>
                    )
                }) :
                 "Votre est actuellement vide"
            }

        </div>
    )
}

export default Panier


