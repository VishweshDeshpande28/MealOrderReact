import React from "react";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import useLocalStorage from "./useLocalStorage";
import GooglePayButton from "@google-pay/button-react";

export const Checkoutpaymentform = () => {

  let [value, setValue] = useLocalStorage('email','');
  let [value1, setValue1] = useLocalStorage("first", '');
  let [value2, setValue2] = useLocalStorage("last", '');
  let [value3, setValue3] = useLocalStorage("phone", '');
  let [value4, setValue4] = useLocalStorage("city", '');
  let [value5, setValue5] = useLocalStorage("zip", '');

  // Payment Gateway
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"],
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: "BCR2DN6T56A25O3I",
      merchantName: "IIFL Securities",
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "INR",
      countryCode: "IN",
    },
  };

// Payment Gateway Button
  const [buttonColor, setButtonColor] = useState("default");
  const [buttonType, setButtonType] = useState("buy");
  const [buttonSizeMode, setButtonSizeMode] = useState("static");
  const [buttonWidth, setButtonWidth] = useState(240);
  const [buttonHeight, setButtonHeight] = useState(40);

  const isTop = window === window.top;

// Customer Form

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (

    // Email
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <h3>Customer Details</h3>
          <Form.Group md="8" >
            <Form.Label>Email Address</Form.Label>
            <Form.Control required placeholder="Email Address" name="email" type="text" onChange={(event) => setValue(event.target.value)}
              value={value}
            />
            <br />
          </Form.Group>

{/* FirstName */}
          <Form.Group as={Col} md="6" >
            <Form.Label>First Name</Form.Label>
            <Form.Control required placeholder="First name" name="first" type="text" onChange={(event) => setValue1(event.target.value)}
            value={value1}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

{/* LastName */}
          <Form.Group as={Col} md="6" >
            <Form.Label>Last Name</Form.Label>
            <Form.Control required placeholder="Last name" name="last" type="text" onChange={(event) => setValue2(event.target.value)}
            value={value2}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>


{/* Region */}
        <Row className="mb-3">
          <Form.Group as={Col} md="6" >
            <Form.Label>Select Region</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Region from list</option>
              <option value="1">Australia</option>
              <option value="2">North America</option>
              <option value="3">Bahrain</option>
              <option value="3">India</option>
              <option value="3">Belarus</option>
            </Form.Select>
          </Form.Group>

{/* Phone */}
          <Form.Group as={Col} md="6">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control required placeholder="Phone Number" name="phone" type="number" onChange={(event) => setValue3(event.target.value)}
            value={value3}/>
          </Form.Group>

{/* State */}
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Select State</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select State from list</option>
              <option value="1">Andhra Pradesh</option>
              <option value="2">Arunachal Pradesh</option>
              <option value="3">Assam</option>
              <option value="3">Bihar</option>
              <option value="3">Chhatisgarh</option>
              <option value="3">Goa</option>
              <option value="3">Gujrat</option>
              <option value="3">Haryana</option>
              <option value="3">Himachal Pradesh</option>
              <option value="3">Jharkhand</option>
              <option value="3">Karnataka</option>
              <option value="3">Kerala</option>
              <option value="3">Madhya Pradesh</option>
              <option value="3">Maharashtra</option>
              <option value="3">Manipur</option>
              <option value="3">Meghalaya</option>
              <option value="3">Mizoram</option>
              <option value="3">Nagaland</option>
              <option value="3">Odisha</option>
              <option value="3">Punjab</option>
              <option value="3">Rajasthan</option>
              <option value="3">Sikkim</option>
              <option value="3">Tamil Nadu</option>
              <option value="3">Telangana</option>
              <option value="3">Tripura</option>
              <option value="3">Uttar Pradesh</option>
              <option value="3">Uttarakhand</option>
              <option value="3">West Bengal</option>
            </Form.Select>
          </Form.Group>


{/* City */}
          <Form.Group as={Col} md="3">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="Enter City" required name="city" type="text" onChange={(event) => setValue4(event.target.value)}
            value={value4}/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid City.
            </Form.Control.Feedback>
          </Form.Group>

{/* Zip */}
          <Form.Group as={Col} md="3">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control placeholder="Postal Code" name="zip" type="number" onChange={(event) => setValue5(event.target.value)}
            value={value5}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <br />


{/* radio */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12" >
              <h3>Delivery Method</h3>
              <form>
                <div className="radio" >
                  <label>
                    <input type="radio"></input>
                    <label for="first"></label>
                    Standard Delivery (Will take 1-2 hours)
                  </label>
                </div>
                <br />
                <div className="radio">
                  <label>
                    <input type="radio"></input>
                    <label for="second"></label>
                    Express Delivery (Express Charges 45Rs. + Guaranteed half hour Delivery)
                  </label>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>

        <h3>
          ------------------------------------------------------------------------------------------------
        </h3>

        <br />

        <Form.Group className="mb-3">
          <Form.Check label="Save this information for next time"/>
        </Form.Group>

        <Button type="submit">Continue to Payment</Button>
      </Form>
      <br />
      <div className="demo">
        <GooglePayButton
          environment="TEST"
          buttonColor={buttonColor}
          buttonType={buttonType}
          buttonSizeMode={buttonSizeMode}
          paymentRequest={paymentRequest}
          onLoadPaymentData={(paymentRequest) => {
            console.log("load payment data", paymentRequest);
          }}
          style={{ width: buttonWidth, height: buttonHeight }}
        />
      </div>
    </Container>
  );
};

export default Checkoutpaymentform;
