import { useContext } from 'react';
import React, {useState } from 'react';
import './ProductList.css';
import CartContext from '../../store/cart-context';
import { MealItemForm } from './product-pages/MealItemForm';

export const ProductList = (props) => { 
   const cartCtx = useContext(CartContext);
    const addToCartHandler = amount => {
      cartCtx.addItem({
        id: props.id,
        name: props.productName,
        amount: amount,
        price: props.price,
        imgPath:props.imgpath
      });
     // console.log(cartCtx);
    };
  // console.log(props.id)
  return (   
    <div key={props.id} className='product_list' id={'productItem_'+props.id} >
         <img className="listimg" src={props.imgpath} alt="product" />
         <div className="product_inner py-3 px-4">
               <h2 className="text-center pb-2">{props.productName}</h2>
               <div className="amt text-center pb-3">₹ {props.price}</div>
               <MealItemForm id={props.id} onAddToCart={addToCartHandler}  />
         </div>
      </div>
  )
}
