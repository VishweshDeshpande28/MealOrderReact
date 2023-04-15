import React, { useState } from 'react';
import About from './about';
import Home from './Home';
import { Route,Switch,Redirect } from 'react-router-dom';
import { CategoryDetails } from './category/category-details/Category-Details';
import { Productpages } from './product/product-pages/Product-pages';
import OrderDetailsPage from './orderpage/OrderDetailsPage';
import Checkoutpaymentform from './checkoutpayment/CheckoutPayment';

export const RoterLink = () => {
    const [subCategory] = useState([
        { text: "McDonald's", id: "c1",imgPatch:"../../../assets/mcdonald.png" },
        { text: "Subway", id: "c2",imgPatch:"../../../assets/subway.png"},
        { text: "Burger King", id: "c3",imgPatch:"../../../assets/burgerking.png"},
        { text: "KFC", id: "c4",imgPatch:"../../../assets/kfc.png"},
        { text: "Domino's Pizza", id: "c5",imgPatch:"../../../assets/dominos.png"},
      ]);
     // console.log(subCategory);
    

  return (
    <>
        <Switch>
            <Route path="/" exact>
                    <Redirect to='/home'/>
            </Route>
            <Route path="/home">
                <Home CategoryData={subCategory} />
            </Route>     
            <Route path="/about" exact>
                <About/>
            </Route>  
            <Route path="/order/OrderDetails">
                <OrderDetailsPage />
            </Route> 
            <Route path="/checkout">
                <Checkoutpaymentform />            
            </Route>            
            <Route path="/category-details/:categoryId" exact>
                <CategoryDetails/>
            </Route> 
            <Route path="/Productpages" exact>
                <Productpages />
            </Route>
            <Route path="/Productpages/:productId">
                <Productpages/>
            </Route> 
        </Switch>
             
     
    </>
  )
}
