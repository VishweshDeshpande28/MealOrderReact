import React, { useState } from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export const Category = (props) => {
  return (
    <>
      <div className="container pt-1 category-section">
        <h1 className="text1">Top Brands Delivered To You !</h1>
        <div className="sub-category brands-list d-flex justify-content-between flex-wrap">
          {props.brandName.map((brands) => (
            <Link to={"/category-details:" + brands.id} key={brands.id}>
              <div className="brands-item d-flex flex-column" id={brands.id}>
                <img src={brands.imgPatch} alt="" />
                <h2 className="text-center ">{brands.text}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Container>
          <div className="imageDiv">
            <img
            height="300px"
              width="300px"
              src="https://b.zmtcdn.com/web_assets/91fd934b79f23aeba3c3908837208ec71626083686.png"
            />
            <div className="dataDiv">
            <div className="headings">
              <h1>Get the FEEDME App</h1>
              <p>
                We will send you a link, open it on your phone to download the
                app
              </p>
            </div>
          </div>
          
            <div className="radioButtons">
              <div>
                <input type="radio" name="link" id="email" />
                <label for="email">Email</label>
              </div>
              <div>
                <input type="radio" name="link" id="phone" />
                <label for="phone">Phone</label>
              </div>
            </div>
            
            <div className="downloadDiv">
              <p>Download app from</p>
              <div className="storeButtons">
                <img
                  width="150px"
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                />
                <img
                  width="150px"
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                />
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};
