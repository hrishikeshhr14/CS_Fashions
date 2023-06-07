import React from 'react';
import Menss from './MMens';
import "./Mstyle.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Mens = () => {
  const mens = [
    {
      name: 'T shirt 1',
    
      image: 'd5.png'
    },
    {
      name: 'Pant',
      
      image: 'd2.png'
    },
    {
      name: 'Tshirt 3',
      
      image: 'd5.png'
    },
    {
      name: 'T shirt 4',
      
      image: 'd2.png'
    },
    {
      name: 't shirt 5',
    
      image: 'd5.png'
    },
    {
      name: 'Tshirt 3',
      
      image: 'd2.png'
    },
    {
      name: 't shirt 5',
    
      image: 'd5.png'
    },
    // Add more testimonials here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  function getSlidesToShow() {
    const viewportWidth = window.innerWidth;
    return viewportWidth < 768 ?1 : 5;
  }

  return (
    <div className="mens-section">
       <h1>MENS</h1>
      <Slider {...settings}>
       
        {mens.map((mens, index) => (
          <Menss
        
            key={index}
            name={mens.name}
            quote={mens.quote}
            image={mens.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Mens;
