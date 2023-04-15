import React from 'react';
import './Footer.css';
import Dropdown from 'react-bootstrap/Dropdown';

export const FooterSection = () => {
  return (
    <>
    <footer className='footerSection mt-5'>
  <div className="container">
    <div className="row">
      <div className="col-md-3 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">ABOUT FEEDME</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Who We Are</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Work With Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Investor Relations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Report Fraud</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="col-md-3 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">FOR RESTAURANT</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Partner With Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Apps For You</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">FEEDME For Work</a>
          </li>
        </ul>
      </div>
      <div className="col-md-3 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">FEEDME LINKS</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">FEEDME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Feeding India</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hyperpure</a>
          </li>
        </ul>
      </div>
      <div className="col-md-3 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">LEARN MORE</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Privacy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Security</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Terms</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">FEEDME For Work</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>
    
    <div className="row text-center">
      <div className="col-md-4 box">
        <span className="copyright quick-links">Copyright &copy; FEEDME 2022
        </span>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline quick-links">
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</>
  )
}
