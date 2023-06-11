import React from 'react'
import { Carousel } from 'react-bootstrap' 
import "./carousel.css";
export default function carousel() {
  return (
    <div>
    <Carousel fade className="custom-carousel">
      <Carousel.Item>
        <img
          className="c-block w-100 "
          src="C1.png"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="C2.png"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>     */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="C3.png"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>    
    </div>   
  )
}
