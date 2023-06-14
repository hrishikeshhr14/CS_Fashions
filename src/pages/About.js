import ImageAndTextExample from "../components/imagefor"
import Produc from "./products/Product"

import React from 'react';

const About = () => {
  const pageStyle = {
    backgroundColor: '#f2f2f2' // Set the desired background color
  };
  const headingStyle = {
    fontFamily: 'Montserrat' // Set the desired font family
  };


  return (
    <div className="Aboutme" style={pageStyle}>
      <h1 style={headingStyle}>about us</h1>
  
      <ImageAndTextExample />
      <Produc/>
    
    </div>
  );
};

export default About;
