import React from 'react';
import Testimonial from './test';
import "./teststyle.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Hrishikesh',
      quote: 'This product changed my life!',
      image: 'latest.jpg'
    },
    {
      name: 'Jane Smith',
      quote: 'I highly recommend this service.',
      image: 'd2.png'
    },
    {
      name: 'Jane Smith',
      quote: 'Its amazing.',
      image: 'd1.png'
    },
    {
      name: 'Jane Smith',
      quote: '"Marvelous ',
      image: 'd6.png'
    },
    {
      name: 'Jane Smith',
      quote: 'Beautiful',
      image: 'abo.png'
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
    return viewportWidth < 768 ?1 : 3;
  }

  return (
    <div className="testimonial-section">
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
