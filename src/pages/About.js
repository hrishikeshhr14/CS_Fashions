// import ImageAndTextExample from "../components/imagefor"
import Produc from "./products/Product"

import React from 'react';

const About = () => {
 
  const headingStyle = {
    fontFamily: 'Montserrat' ,// Set the desired font family
   
  };
  return (
    <div>
      <br></br>
      <h1 style={headingStyle}>About us</h1>
      {/* <ImageAndTextExample /> */}
      <Produc/>
    </div>
  );
};

export default About;
