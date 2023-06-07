import React from 'react';

const Boyss = ({ name, quote, image }) => {
  return (
    <div className="boys">
      <img className="boys-image" src={image} alt={name} />
      <h3 className="boys-name">{name}</h3>
      {/* <p className="boys-quote">{quote}</p> */}
    </div>
  );
};

export default Boyss;
