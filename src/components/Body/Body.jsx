import React from 'react';

import STYLES from './Body.scss';
import FlightItem from './../FlightItem';
import flightData from './../../flights.json';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const flights = flightData.itineraries.map(flight =>
  <FlightItem flight={flight} key={flight.id} legs={flight.legs} />,
);

const Body = () => (
  <div className={getClassName('App')}>
    <section className={getClassName('App__main')}>
      {flights}
    </section>
  </div>
);

export default Body;
