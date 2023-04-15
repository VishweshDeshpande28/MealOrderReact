import React from "react";
import OrderDetailsPage from "../orderpage/OrderDetailsPage";
import Checkoutpaymentform from "./CheckoutPayment";


export const CheckoutPage=()=> {
  return (
    <>
        <OrderDetailsPage />
        <Checkoutpaymentform/>
    </>
  );
  }