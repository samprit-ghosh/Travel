import React from 'react';
import Typewriter from 'typewriter-effect';


const MyWraper = () => {
  return (
 

 
    <h3 className="requests__heading ">
      <Typewriter
        options={{
          strings: [
            'Best Hotel',
            'Tourist Guide',
            '<strong>Flight Tickets</strong>',
          ],
          autoStart: true,
          loop: true,
          pauseFor: 2500,
          deleteSpeed: 50,
        }}
      />

    </h3>

  );
};

export default MyWraper;
