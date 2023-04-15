import { Container } from '@mui/system'
import React from 'react'
import {Carousel} from 'react-bootstrap'
import pic1 from '../pages/kfc1.jpg'
import pic2 from '../pages/mcdonald-banner-1.png'
import pic3 from '../pages/subway-banner.png'

const Banner = () => {
  return (
    <Container>

      <Carousel>
      <Carousel.Item interval={1000} scroll={Infinity}>
        <img
          className="d-block w-100 height-100px p-0"
          src={pic1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block height-100 w-100"
          src={pic2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block height-100 w-100"
          src={pic3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <br />
    </Container>
  )
}

export default Banner;
