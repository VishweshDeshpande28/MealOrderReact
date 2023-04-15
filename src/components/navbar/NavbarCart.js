import React,{useState ,useContext} from 'react';
import CartContext from '../store/cart-context';
import './NavbarCart.css';

export const NavbarCart = (props) => {
    const [cartmodalShow, setCartModalShow] = useState(false);
    const cartIsOPen=()=>{
      setCartModalShow(props.onShowCart);
    }
    const cartCtx =useContext(CartContext);

    const numberOfCartItem= cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0);
  return (    
    <button className='border-0 cart-item-icon position-relative' variant="primary" onClick={cartIsOPen}>      
       <span>
            <img src='../../../assets/cart-item-1.png' alt='' width="20px"/>
        </span>
        <span className='cartCount'>{numberOfCartItem}</span>
    </button>
  )
}
