// import React from 'react';
// import Timeline from './Timeli';

// const events = [
//   { date: '2023-06-09', description: 'Monday event' },
//   { date: '2023-06-09', description: 'Tuesday Event' },
//   { date: '2023-06-09', description: 'Wednesday event' },
//   // Add more events as needed
//   { date: '2023-06-09', description: 'Monday event' },
//   { date: '2023-06-09', description: 'Tuesday Event' },
//   { date: '2023-06-09', description: 'Wednesday event' },
// ];

// const App = () => {
//   return (
//     <div>
//       <h1>Timeline</h1>
//       <Timeline events={events} />
//     </div>
//   );
// };

// export default App ;
import React from 'react';

import Timeline from './Timeli';

const events = [
  { date: '2021-01-01', description: 'Event 1' },
  { date: '2021-02-01', description: 'Event 2' },
  { date: '2021-03-01', description: 'Event 3' },
  { date: '2021-01-01', description: 'Event 1' },
  { date: '2021-02-01', description: 'Event 2' },
  { date: '2021-03-01', description: 'Event 3' },
  // Add more events as needed
];

const App = () => {
  return (
    <div>
      <h1>Timeline Example</h1>
      <Timeline events={events} />
    </div>
  );
};

export default App;
