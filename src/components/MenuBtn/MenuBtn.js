
/* exemple de component avec function fléchée SANS RETURN

const MenuBtn = (props)=>{
    <div></div>
} */
function MenuBtn(props){
    return (<div>{props.children}</div>);//
}

export default MenuBtn;