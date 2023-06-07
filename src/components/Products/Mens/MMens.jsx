import React from 'react';

const Mens = ({ name, quote, image }) => {
  return (
    <div className="mens">
      <img className="mens-image" src={image} alt={name} />
      <h3 className="mens-name">{name}</h3>
      <p className="mens-quote">{quote}</p>
    </div>
  );
};

export default Mens;
