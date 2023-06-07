import React from 'react';
import Boyss from './BBoys';
import "./Bstyle.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Boys = () => {
  const boys = [
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
    return viewportWidth < 768 ?1 : 5;
  }

  return (
    <div className="boys-section">
       <h1>BOYS</h1>
      <Slider {...settings}>
       
        {boys.map((boys, index) => (
          <Boyss
        
            key={index}
            name={boys.name}
            // quote={testimonial.quote}
            image={boys.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Boys;
