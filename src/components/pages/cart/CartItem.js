import React from 'react';
import './CartItem.css';
export const CartItem = (props) => {
  return (
    <li className='cart-item'>
      <div>
        <h2>{props.name}</h2>
        <div className='summary'>
            <span className='imgpath'><img src={props.imgPath} alt=''/></span>
          <span className='price'>₹ {props.price}</span>
          <span className='amount'>x {props.amount}</span>
          <span className='SubTotal'>{props.subTotal}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  )
}
