import React from 'react';
import Womenss from './WWomens';
import "./Wstyle.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Womens = () => {
  const womens = [
    {
      name: 'T shirt 1',
    
      image: 'd6.png'
    },
    {
      name: 'Pant',
      
      image: 'd6.png'
    },
    {
      name: 'Tshirt 3',
      
      image: 'd6.png'
    },
    {
      name: 'T shirt 4',
      
      image: 'd6.png'
    },
    {
      name: 't shirt 5',
    
      image: 'd6.png'
    },
    {
      name: 'Boys Tshirt 3',
      
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
    return viewportWidth < 768 ?2 : 5;
  }

  return (
    <div className="womens-section">
       <h1>WOMENS</h1>
      <Slider {...settings}>
       
        {womens.map((womens, index) => (
          <Womenss
        
            key={index}
            name={womens.name}
            // quote={testimonial.quote}
            image={womens.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Womens;
