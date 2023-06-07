import React from 'react';

const Testimonial = ({ name, quote, image }) => {
  return (
    <div className="testimonial">
      <img className="testimonial-image" src={image} alt={name} />
      <h3 className="testimonial-name">{name}</h3>
      <p className="testimonial-quote">{quote}</p>
    </div>
  );
};

export default Testimonial;
