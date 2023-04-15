import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import './OrderDetailsPage.css';




const OrderDetailsPage = (props) => {
    const cartCtx= useContext(CartContext);
    console.log(cartCtx);
  return (
    
    <div className='container'>
    
        <div className='row py-4'>
        <h2 className="text-center mb-3 text-uppercase">Order Details</h2>
            <div className='col-12'>
            <table className='orderdetailstbl' cellPadding={0} cellSpacing="0" width="100%">
              <tbody>

              
            <tr>
                <th>Product</th>
                <th>Product Name</th>
                <th className='text-center'>Amount</th>
                <th className='text-center'>Quantity</th>
                <th className='text-center'>Total Amount</th>
            </tr>
            {cartCtx.items.map(orderList=>(
            <tr key={orderList.id} id={orderList.id}>
                <td><img src={orderList.imgPath} alt="product" /></td>
                <td>{orderList.name}</td>
                <td className='text-center'>{orderList.price}</td>
                <td className='text-center'>{orderList.amount}</td>
                <td className='text-center'>{orderList.price * orderList.amount}</td>
            </tr>
            ))}
            <tr>
                <td colSpan={3} className="checkout">
                <Link to="/checkout">
                  <button className='checkoutbtn'>Proceed to Checkout</button>
                  </Link>
                  </td>
                <td colSpan={2} className="amttotal">Total :{cartCtx.totalAmount}</td>
            </tr>  
            
            </tbody>  
                   
            </table>

            </div>
        </div>
    </div>
  )
}

export default OrderDetailsPage;
