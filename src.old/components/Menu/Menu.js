import MenuBtn from "../MenuBtn/MenuBtn";
import "./Menu.css";
/* var clients = document.getElementById('clients');
var services = document.getElementById('services');

clients.addEventListener('click', function() {
  clients.classList.toggle("active");
  document.querySelector(".parent:not(#clients)").classList.toggle("invisible");
}, false);

services.addEventListener('click', function() {
    clients.classList.toggle("active");
    document.querySelector(".parent:not(#clients)").classList.toggle("invisible");
}, false); */
function Menu(props) {
    
    return (
        <nav className="navigationWrapper">
            <div className="logoWrapper">
                <span className="stylish">Vinyl</span>
                <span className="logo">Shop</span>
            </div>
            <ul className="navigation">
                <li className="parent">
                    <MenuBtn title="">HOME <i className='fa-solid fa-home'></i></MenuBtn>{/* props.tile = innerText props.children = innerHTML */}
                </li>
                <li className="parent">
                    <MenuBtn title="">VINYLS <i className='fa-solid fa-compact-disc'></i></MenuBtn>
                </li>
                <li className="parent" id="services" onClick={props.action}>
                    {/* declaration d'event sur un element */}
                    <MenuBtn title="" btnCart={true}>CART <i className='fa-solid fa-cart-shopping'></i></MenuBtn>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;