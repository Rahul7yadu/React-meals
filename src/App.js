import CartProvider from './store/CartProvider';
import {useState,Fragment} from 'react';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart"

function App() {
  
const [cartIsShown,setCartIsShown] = useState(false);

const cartShowHandler=()=>{
  setCartIsShown(true);

}
const cartHideHandler = ()=>{
  setCartIsShown(false);
}
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={cartHideHandler}></Cart>}
      <Header onShowCart = {cartShowHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
