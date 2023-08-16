import React from 'react';
import Testimonial from './test';
import "./teststyle.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'NOIZE',
      quote: 'CSFASHIONS IS ONE OF THE BEST PARTNERS',
      image: 'noize.png'
    },
    {
      name: 'ARAVIND',
      quote: 'I highly recommend this COMPANY.',
      image: 'ARAVIND.png'
    },
    {
      name: 'JUST BRANDS',
      quote: 'Its amazing.',
      image: 'JUSTBRAND.png'
    },
    {
      name: 'CROOKS & CASTLE',
      quote: '"Marvelous ',
      image: 'CROOKS.png'
    },
    {
      name: 'BLEU BAYOU',
      quote: 'Beautiful',
      image: 'bay.png'
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
      <h1> OUR CLIENTS</h1>
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
