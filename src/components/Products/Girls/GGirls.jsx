import React from 'react';

const Girls = ({ name, quote, image }) => {
  return (
    <div className="girls">
      <img className="girls-image" src={image} alt={name} />
      <h3 className="girls-name">{name}</h3>
      <p className="girls-quote">{quote}</p>
    </div>
  );
};

export default Girls;
