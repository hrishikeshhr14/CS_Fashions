// import React from 'react';
// import './timeline.css';

// const Timeline = ({ events }) => {
//   return (
//     <div className="timeline">
//       {events.map((event, index) => (
//         <div className="timeline-event" key={index}>
//           <div className="timeline-event-date">{event.date}</div>
//           <div className="timeline-event-description">{event.description}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Timeline;
import React from 'react';
import './timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-event left-event">
          <div className="timeline-event-content">
            <div className="timeline-event-date">{events[0].date}</div>
            <div className="timeline-event-description">{events[0].description}</div>
          </div>
        </div>
        {events.slice(1).map((event, index) => (
          <React.Fragment key={index}>
            <div className={`timeline-event ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <div className="timeline-event-content">
                <div className="timeline-event-date">{event.date}</div>
                <div className="timeline-event-description">{event.description}</div>
              </div>
            </div>
            <div className={`timeline-connector ${index % 2 === 0 ? 'even-connector' : 'odd-connector'}`} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timeline;


