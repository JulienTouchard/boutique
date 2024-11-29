import React, { useContext } from 'react'
import { BoutiqueContext } from '../../contexts/BoutiqueContext'


function ArticlePanier(props) {
    const boutiqueContext = useContext(BoutiqueContext);
    const article = boutiqueContext.dataBoutiqueState[props.id];
  return (
    <div>
      <img src={"./assets/img/" + article.imgUrl}
       alt={article.name}
       style={{width:64}}></img>
       <span>{article.name}</span>
       <button onClick={()=>boutiqueContext.removeFromPanier(props.id)}>-</button>
       <span>{article.qte}</span>
       <button onClick={()=>boutiqueContext.addToPanier(props.id)}>+</button>
       <span>{article.price}</span>
    </div>
  )
}

export default ArticlePanier
