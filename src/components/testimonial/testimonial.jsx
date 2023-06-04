import React from 'react';
import Testimonial from './test';
import "./teststyle.css";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      quote: 'This product changed my life!',
      image: 'john-doe.jpg'
    },
    {
      name: 'Jane Smith',
      quote: 'I highly recommend this service.',
      image: 'jane-smith.jpg'
    },
    // Add more testimonials here
  ];

  return (
    <div className="testimonial-section">
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          quote={testimonial.quote}
          image={testimonial.image}
        />
      ))}
    </div>
  );
};

export default TestimonialSection;
