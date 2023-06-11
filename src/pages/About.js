// import GridExample from "../components/abcard"
import ImageAndTextExample from "../components/imagefor"
// import GroupExample from "../components/ourproduct"
import Produc from "./products/Product"
// import App from "../components/Timelime/Timeline";



import React from 'react';

const About = () => {
  return (
    <div className="Aboutme">
      <h1>About Us</h1>
      {/* Your services content goes here */}
      <ImageAndTextExample />
      <Produc/>
      {/* <App/> */}
    </div>
  );
};

export default About;
