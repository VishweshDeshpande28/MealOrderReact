
import React,{useContext, useState} from 'react';
import { NavLink, Route,Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import ModalBox from '../../ui/ModalBox';
import './Cart.css';
import { CartItem } from './CartItem';

 const Cart = (props) => {
   const cartCtx= useContext(CartContext);
   const totalAmount =  cartCtx.totalAmount.toFixed(2);
   const hasItems = cartCtx.items.length > 0;

   const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };



   console.log(cartCtx.items);
    const cartItems= (
      // <ul className='cart-items'>
      //   {[{id:'c1', name:'sushi', amount:2,price:120}].map((item)=>(
      //     <li key='c1'>{item.name}</li>
      //   ))}
      // </ul>
      <ul className='cart-items'>
        {cartCtx.items.map((item) => (
          console.log(item),
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            imgPath={item.imgPath}
            subTotal={item.amount * item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
    </ul>
    )
  return (
    <ModalBox onClose={props.onClose}>  
        {cartItems}
        <div className='total'>
            <span>Total Amount</span>
            <span>₹ {totalAmount}</span>
        </div>    
        <div className='btn-actions'>
            <button className='button--alt' onClick={props.onClose}>
                Close
            </button>
            {hasItems && 
              <Link to="/order/OrderDetails">
              <>
                 <button className='btn-order action' onClick={props.onClose}>Order</button>
                 </>
              </Link>
            }
            
        </div>    
    </ModalBox>
  )
}
export default Cart;