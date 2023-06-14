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
        <h1 className="title">Knitting</h1>
        <p className="sdescription">We are capable of producing 3000 kilograms of fabric per day with our in-house facility. Knitting machines imported from several leading manufacturers all over the world, help us in meeting the requirements of our customers and at the same time provide excellent quality fabric.

.</p>
      </div>
    </div><hr></hr>
     <div className="scontainer">
    
     <div className="text-scontainer">
       <h1 className="title">Dyeing</h1>
       <p className="sdescription">Out sourcing from PARTNERSHIP BASED Dyeing & Processing Mills for the past 5 years with Consistent Quality. . All our products comply to REACH standards Imported high end machines Balloon Padding and Squeezing Machine,Tensionless Relax Dier.Compacting Machine and Pole Driers(Santex) which improve efficiencies througout the process.

We uses high quality dyes and chemicals to produce fabric with high fastness, brilliant colors and soft finish. 5000 KGS processing capacity per day. Have well equipped laboratory with computerized color matching system,fastness testing equipments and fabric dimensional stability testing equipments that ensures best fabric quality</p>
     </div>
     <div className="image-scontainer">
       <img src="d5.png" alt="Example" className="image" />
     </div>
   </div><hr></hr>
   <div className="scontainer">
      <div className="image-scontainer">
        <img src="d6.png" alt="Example" className="image" />
      </div>
      <div className="text-scontainer">
        <h1 className="title">Printing</h1>
        <p className="sdescription">All our products comply to REACH standards 3 Nos of 80 feet manual table printing facility with capacity of 5000 pcs/ day. 2 nos manual machine with a production capacity of 3000 pcs/ day.<br></br>

Automatic printinng facility
Out sourcing from PARTNERSHIP BASED printing Mills for the past 2 years with Consistent Quality. 2 MHM printing machine with capacity of 12 colours with flock print attachment.- Production capacity of 20000 pcs/ day.
<br></br>
Rotary/Flatbed printing facility
Out sourcing from PARTNERSHIP BASED printing Mills for the past 2 years with Consistent Quality. 2 Rotary machine, 1 Flatbed printing machine. Production capacity of 3000 kgs/ Day.</p>
      </div>
    </div><hr></hr>
     <div className="scontainer">
    
     <div className="text-scontainer">
       <h1 className="title">Embroidery</h1>
       <p className="sdescription">2 Nos of 20 head Burden embroidery machine with a production capacity 0f 3000 pcs/ day. 1 Sample machine with 6 heads.</p>
     </div>
     <div className="image-scontainer">
       <img src="d5.png" alt="Example" className="image" />
     </div>
   </div>
   <div className="scontainer">
      <div className="image-scontainer">
        <img src="d6.png" alt="Example" className="image" />
      </div>
      <div className="text-scontainer">
        <h1 className="title">Knitting</h1>
        <p className="sdescription">We are capable of producing 3000 kilograms of fabric per day with our in-house facility. Knitting machines imported from several leading manufacturers all over the world, help us in meeting the requirements of our customers and at the same time provide excellent quality fabric.

.</p>
      </div>
    </div>
     <div className="scontainer">
    
     <div className="text-scontainer">
       <h1 className="title">Sampling Team</h1>
       <p className="sdescription"> We have good sampling & R & D team, We make research and advise the clients with possibilities and alternate options. We bring the best product from the tech file to final garment. Record keeping is the main function of our sample team ,They will have the complete processing sequence and technical details of a style to ensure the smooth flow on production.</p>
     </div>
     <div className="image-scontainer">
       <img src="d5.png" alt="Example" className="image" />
     </div>
   </div>
   <div className="scontainer">
      <div className="image-scontainer">
        <img src="d6.png" alt="Example" className="image" />
      </div>
      <div className="text-scontainer">
        <h1 className="title">Knitting</h1>
        <p className="sdescription">We are capable of producing 3000 kilograms of fabric per day with our in-house facility. Knitting machines imported from several leading manufacturers all over the world, help us in meeting the requirements of our customers and at the same time provide excellent quality fabric.

.</p>
      </div>
    </div>
     <div className="scontainer">
    
     <div className="text-scontainer">
       <h1 className="title">Sampling Team</h1>
       <p className="sdescription"> We have good sampling & R & D team, We make research and advise the clients with possibilities and alternate options. We bring the best product from the tech file to final garment. Record keeping is the main function of our sample team ,They will have the complete processing sequence and technical details of a style to ensure the smooth flow on production.</p>
     </div>
     <div className="image-scontainer">
       <img src="d5.png" alt="Example" className="image" />
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


