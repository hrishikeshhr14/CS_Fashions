import React from 'react';
import Testimonial from './test';
import "./teststyle.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      quote: 'This product changed my life!',
      image: 'd5.png'
    },
    {
      name: 'Jane Smith',
      quote: 'I highly recommend this service.',
      image: 'd6.png'
    },
    {
      name: 'Jane Smith',
      quote: 'I highly recommend this service.',
      image: 'd4.png'
    },
    {
      name: 'Jane Smith',
      quote: 'I highly recommend this service.',
      image: 'd6.png'
    },
    {
      name: 'Jane Smith',
      quote: 'I highly recommend this service.',
      image: 'd6.png'
    },
    // Add more testimonials here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 300, // Set autoplay speed in milliseconds
  };

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
