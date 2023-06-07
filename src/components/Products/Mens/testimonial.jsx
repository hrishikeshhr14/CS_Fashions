import React from 'react';
import Testimonial from './test';
import "./teststyle.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'T shirt 1',
    
      image: 'd6.png'
    },
    {
      name: 'Pant',
      
      image: 'd2.png'
    },
    {
      name: 'Tshirt 3',
      
      image: 'd6.png'
    },
    {
      name: 'T shirt 4',
      
      image: 'd2.png'
    },
    {
      name: 't shirt 5',
    
      image: 'd6.png'
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
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  function getSlidesToShow() {
    const viewportWidth = window.innerWidth;
    return viewportWidth < 768 ?1 : 5;
  }

  return (
    <div className="testimonial-section">
       <h1>MENS</h1>
      <Slider {...settings}>
       
        {testimonials.map((testimonial, index) => (
          <Testimonial
        
            key={index}
            name={testimonial.name}
            quote={testimonial.quote}
            image={testimonial.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;
