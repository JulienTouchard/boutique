import CartBtn from "../CartBtn/CartBtn";
import BoutiqueContext from "../../BoutiqueContext";
import React, { useContext } from 'react';
import "./Cart.css"

function Cart(props) {
    const data = useContext(BoutiqueContext);
    let totalCart = 0;
    const countOccurences = (tab) => {
        tab = tab.sort();
        var result = {};
        tab.forEach((elem) => {
            if (elem in result) {
                result[elem] = ++result[elem];
            }
            else {
                result[elem] = 1;
            }
        });
        return result;
    }
    //console.dir(countOccurences(data.achat))

    return (
        <div className="cart">
            <h2>Panier :</h2>
            <table>
                <thead>
                    <tr key="0">
                        <td>image</td>
                        <td>titre</td>
                        <td>prix</td>
                        <td>quantite</td>
                        <td>action</td>
                    </tr>
                </thead>
                <tbody>



                    {
                        Object.keys(countOccurences(data.achat)).map((entree, cle) => {
                            /* console.dir(entree);
                            console.dir(countOccurences(data.achat)[entree]); */
                            let qte = countOccurences(data.achat)[entree];
                            totalCart += data.playlistData[cle].prix * qte;
                            return (
                                <tr key={entree}>
                                    <td><img src={data.playlistData[entree].cover} alt={data.playlistData[entree].cover} /></td>
                                    <td>{data.playlistData[entree].title}</td>
                                    <td>{data.playlistData[entree].prix}</td>
                                    <td>{Math.round((data.playlistData[entree].prix * qte) * 100) / 100}</td>
                                    <td>{qte}</td>
                                    <td>
                                        <CartBtn cle={entree}>+</CartBtn>
                                        <CartBtn cle={entree}>-</CartBtn>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>Total de votre panier : €{Math.round(totalCart * 100) / 100}</div>
        </div>
    )
}

export default Cart