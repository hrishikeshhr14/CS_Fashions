import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Timeline.css'; // Assuming you have a separate CSS file for styling

const Timeline = () => {
  const timelineData = [
    {
      date: '2010',
      image: 'image1.jpg',
      description: 'Company founded',
    },
    {
      date: '2012',
      image: 'image2.jpg',
      description: 'First major product launch',
    },
    {
      date: '2015',
      image: 'image3.jpg',
      description: 'Expansion into international markets',
    },
    // Add more timeline events as needed
  ];

  const sliderRef = useRef(null);

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="timeline-container">
      <div className="timeline-arrow timeline-arrow-left" onClick={goToPrevSlide}>
        <span>&lt;</span>
      </div>
      <div className="timeline-line"></div>
      <Slider ref={sliderRef} {...settings}>
        {timelineData.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-image">
              <img src={event.image} alt={`Event ${index + 1}`} />
            </div>
            <div className="timeline-description">{event.description}</div>
          </div>
        ))}
      </Slider>
      <div className="timeline-line"></div>
      <div className="timeline-arrow timeline-arrow-right" onClick={goToNextSlide}>
        <span>&gt;</span>
      </div>
    </div>
  );
};

export default Timeline;
