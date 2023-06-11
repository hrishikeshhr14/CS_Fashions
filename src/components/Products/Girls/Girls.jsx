import React from 'react';
import Girlss from './GGirls';
import "./Gstyle.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Girls = () => {
  const girls = [
    {
      name: 'girls 1',
    
      image: 'd3.png'
    },
    {
      name: 'girls',
      
      image: 'd2.png'
    },
    {
      name: 'girls 3',
      
      image: 'd3.png'
    },
    {
      name: 'girls 4',
      
      image: 'd2.png'
    },
    {
      name: 'girls 5',
    
      image: 'd3.png'
    },
    {
      name: 'girls 6',
      
      image: 'd2.png'
    },
    {
      name: 'girls 7',
    
      image: 'd3.png'
    },
    // Add more testimonials here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  function getSlidesToShow() {
    const viewportWidth = window.innerWidth;
    return viewportWidth < 768 ?2 : 5;
  }

  return (
    <div className="girls-section">
       <h1>GIRLS</h1>
      <Slider {...settings}>
       
        {girls.map((girls, index) => (
          <Girlss
        
            key={index}
            name={girls.name}
            quote={girls.quote}
            image={girls.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Girls;
