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

const Timeline = () => {
  return (
    <div className='serv'>
    <div className="scontainer">
      <div className="image-scontainer">
        <img src="d6.png" alt="Example" className="image" />
      </div>
      <div className="text-scontainer">
        <h1 className="title">Title</h1>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor nisi sed nisi malesuada consectetur. Sed eleifend ante a nunc condimentum tincidunt.</p>
      </div>
    </div>
     <div className="scontainer">
     <div className="image-scontainer">
       <img src="d5.png" alt="Example" className="image" />
     </div>
     <div className="text-scontainer">
       <h1 className="title">Title</h1>
       <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor nisi sed nisi malesuada consectetur. Sed eleifend ante a nunc condimentum tincidunt.</p>
     </div>
   </div>
   </div>
  );
};

export default Timeline;



// import React from 'react';
// import './timeline.css';

// const Timeline = ({ events }) => {
//   return (
//     <div className="timeline-container">
//       <div className="timeline">
//         <div className="timeline-event left-event">
//           <div className="timeline-event-content">
//             <div className="timeline-event-date">{events[0].date}</div>
//             <div className="timeline-event-description">{events[0].description}</div>
//           </div>
//         </div>
//         {events.slice(1).map((event, index) => (
//           <React.Fragment key={index}>
//             <div className={`timeline-event ${index % 2 === 0 ? 'even' : 'odd'}`}>
//               <div className="timeline-event-content">
//                 <div className="timeline-event-date">{event.date}</div>
//                 <div className="timeline-event-description">{event.description}</div>
//               </div>
//             </div>
//             <div className={`timeline-connector ${index % 2 === 0 ? 'even-connector' : 'odd-connector'}`} />
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;


