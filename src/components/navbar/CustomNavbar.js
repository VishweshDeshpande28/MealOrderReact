import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { NavbarCart } from './NavbarCart';
import Cart from '../pages/cart/Cart';

 const CustomNavbar = () => {
  const [CartModalShow,setCartModalShow]=useState(false);
  const showCartHandler=()=>{
    setCartModalShow(true)
  }
  const hideCartHandler=()=>{
    setCartModalShow(false)
  }
  return (   
    <Navbar bg="dark" variant="dark" expand="lg" className='myNavBar'>
    <Container className='navbarParent'>
      <Navbar.Brand  >
        <NavLink to="/home">
          <img src='https://www.growme.io/assets/img/feedme-logo.png' alt='logo' width="130px"/>
        </NavLink>
               
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-lg-flex d-md-flex justify-content-between w-100">
          <div className='d-flex align-content-center'>
            <NavLink activeClassName={'navActive'} className='nav-link' to="/home">Home</NavLink>
            
            <NavLink activeClassName={'navActive'} className='nav-link' to="/about">About</NavLink> 
            <NavLink className='nav-link' to="/login">Log in</NavLink>
            <NavLink className='nav-link' to="/signup">Sign up</NavLink>   
            <NavLink className='nav-link' to="/gettheapp">Get the App</NavLink> 
          </div>
          <NavbarCart onShowCart={showCartHandler}/>
        </Nav>
       
      </Navbar.Collapse>
    </Container>
    
    {CartModalShow  && <Cart onClose={hideCartHandler}/>}
    
  </Navbar>
  )
}
export default CustomNavbar;