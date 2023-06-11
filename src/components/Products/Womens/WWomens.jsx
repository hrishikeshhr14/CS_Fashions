import React from 'react';

const Womenss = ({ name, quote, image }) => {
  return (
    <div className="womens">
      <img className="womens-image" src={image} alt={name} />
      <h3 className="womens-name">{name}</h3>
      {/* <p className="boys-quote">{quote}</p> */}
    </div>
  );
};

export default Womenss;
