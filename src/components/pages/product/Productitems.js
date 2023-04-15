import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Productitems.css";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import IconButton from "@material-ui/core/IconButton";
import { SearchOutlined } from "@material-ui/icons";

export const Productitems = () => {
  const [subproductitem, setsubproductitem] = useState([
    {
      text: "Healthy",
      id: "healthy",
      imgPatch: "../../../assets/Product/product-option/option-1.png",
    },
    {
      text: "Pizzas",
      id: "pizza",
      imgPatch: "../../../assets/Product/product-option/option-2.png",
    },
    {
      text: "Biryani",
      id: "biryani",
      imgPatch: "../../../assets/Product/product-option/option-3.png",
    },
    {
      text: "Chaats",
      id: "chaat",
      imgPatch: "../../../assets/Product/product-option/option-4.png",
    },
    {
      text: "Sandwiches",
      id: "sandwich",
      imgPatch: "../../../assets/Product/product-option/option-5.png",
    },
    {
      text: "Burgers",
      id: "burger",
      imgPatch: "../../../assets/Product/product-option/option-6.png",
    },
    {
      text: "HomeStyle",
      id: "homestyle",
      imgPatch: "../../../assets/Product/product-option/option-7.png",
    },
    {
      text: "Cakes",
      id: "cake",
      imgPatch: "../../../assets/Product/product-option/option-8.png",
    },
    {
      text: "Desserts",
      id: "desserts",
      imgPatch: "../../../assets/Product/product-option/option-8.png",
    },
  ]);

  console.log(subproductitem);
  return (
    <section className="productItem">
      <Container>
        <TextField
          fullWidth
          id="standard-bare"
          variant="outlined"
          label="Search for restaurants, cuisine or a dish"
          
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchOutlined />
              </IconButton>
            ),
          }}
        />
      </Container>

      <h1> Discover the best food & drinks in Mumbai</h1>

      <div className="all-product container">
        {subproductitem.map((subproductData) => (
          <div
            className="product-item d-flex flex-column"
            key={subproductData.id}
            id={subproductData.id}
          >
            <Link to={"/Productpages/" + subproductData.id}>
              <img src={subproductData.imgPatch} alt="" width="95px" />
              <h2 className="text-center ">{subproductData.text}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
