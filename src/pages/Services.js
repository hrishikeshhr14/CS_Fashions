import Timeline from "../components/Timelime/Timeline"
import React from 'react';

function Services() {
  const headingStyle = {

    fontFamily: 'Montserrat',
    color: 'black',
    fontSize: '30px'
   
    
  };

  return (
    <div>
      <br></br>
      <h1 style={headingStyle}>Services</h1>
      <Timeline/>
    </div>
  );
}

export default Services;
