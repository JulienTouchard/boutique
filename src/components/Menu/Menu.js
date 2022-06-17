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
                <span className="stylish">Stylish</span>
                <span className="logo">Logo</span>
            </div>
            <ul className="navigation">
                <li className="parent">
                    <MenuBtn title="">HOME</MenuBtn>{/* props.tile = innerText props.children = innerHTML */}
                </li>
                <li className="parent">
                    <MenuBtn title="">VINYLS<i className='fa-solid fa-compact-disc'></i></MenuBtn>
                </li>
                <li className="parent" id="services" onClick={props.action}>
                    {/* declaration d'event sur un element */}
                    <MenuBtn title="">CART</MenuBtn>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;