import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon.js"
import CartContext from '../../store/cart-context';
import {useContext,useState,useEffect} from 'react';
const HeaderCartButton = props =>{
    const ctx = useContext(CartContext);
const [btnIsHighlighted,setBtnIsHiglighted] = useState(false)
const btnClasses = `${classes.button} ${btnIsHighlighted? classes.bump:''}`
useEffect(() => {
    if(ctx.items.length===0){return}
setBtnIsHiglighted(true)

const timer = setTimeout(()=>{setBtnIsHiglighted(false)},300)

return(()=>{clearTimeout(timer)})
},[ctx.items])
const numberOfCartItems = ctx.items.reduce((curNum,item)=>{
return curNum + item.amount;
},0);
    return <button className = {btnClasses} onClick={props.onClick}>
    <span className = {classes.icon}><CartIcon></CartIcon></span>
    <span>your cart</span>
    <span  className = {classes.badge}>{numberOfCartItems}</span>

    </button>
}
export default HeaderCartButton;





