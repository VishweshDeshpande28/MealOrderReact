import './App.css';
import React,{ useState } from 'react';
import { FooterSection } from './components/footer/Footer';
import CustomNavbar from './components/navbar/CustomNavbar';

import { RoterLink } from './components/pages/RoterLink';
import CartProvider from './components/store/CartProvider';
import KommunicateChat from './chat';



function App() {

  return (
    <CartProvider>
    <KommunicateChat/>       
      <header>
        <CustomNavbar/>        
      </header> 
    <RoterLink/>   
    <FooterSection/>
    </CartProvider>
  );
}

export default App;
