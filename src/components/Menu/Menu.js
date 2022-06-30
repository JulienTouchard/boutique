import Cart from "../Cart/Cart";
import MenuBtn from "../MenuBtn/MenuBtn";

import "./Menu.css";


function Menu(props){
    return (
        <nav>
            <ul>
                <li>
                    <MenuBtn title="">HOME<i className="fa-solid fa-house"></i></MenuBtn>
                </li>
                <li>
                    <MenuBtn title="">Vinyl<i className="fa-solid fa-compact-disc"></i></MenuBtn>
                </li>
                <li onClick={props.action}>
                    <MenuBtn title="" btnCart={true}>Cart<i className="fa-solid fa-cart-shopping"></i></MenuBtn>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;

