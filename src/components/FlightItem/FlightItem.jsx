
import React from 'react';
import PropTypes from 'prop-types';
import BpkText from 'bpk-component-text';

import STYLES from './FlightItem.scss';
import flightData from './../../flights.json';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const getFlightLegs = (legs) => {
  const flightLegs = [];
  legs.forEach((leg) => {
    flightLegs.push(flightData.legs.find(flightLeg => flightLeg.id === leg));
  });
  return flightLegs;
};

const flightIconImageSource = id => `https://logos.skyscnr.com/images/airlines/favicon/${id}.png`;

const getFlightTime = (flightTime) => {
  const date = new Date(flightTime);
  return `${date.getHours()}:${date.getMinutes()}`;
};

const getFlightDuration = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}`;
};

const getFlightStops = (stops) => {
  if (stops === 0) {
    return { value: 'Direct', css: 'FlightItem__direct' };
  } else if (stops === 1) {
    return { value: `${stops} Stop`, css: 'FlightItem__stop' };
  }
  return { value: `${stops} Stops`, css: 'FlightItem__stop' };
};

const FlightItem = ({ flight }) => (
  <div className={getClassName('FlightItem__card')}>
    <div className={getClassName('FlightItem__container')}>
      {getFlightLegs(flight.legs).map(leg =>
        (
          <div className={getClassName('FlightItem__row')} key={leg.id}>
            <div className={getClassName('FlightItem__column__1')}>
              <img className={getClassName('FlightItem__image')} src={flightIconImageSource(leg.airline_id)} alt={leg.airline_name} />
            </div>
            <div className={getClassName('FlightItem__column__2')}>
              <BpkText tagName="p">{getFlightTime(leg.departure_time)}</BpkText>
              <BpkText tagName="p" className={getClassName('FlightItem__grey__2')}>{leg.departure_airport}</BpkText>
            </div>
            <div className={getClassName('FlightItem__column__2')}>
              <BpkText tagName="p" className={getClassName('FlightItem__icon')}>&rarr;</BpkText>
            </div>
            <div className={getClassName('FlightItem__column__2')}>
              <BpkText tagName="p">{getFlightTime(leg.arrival_time)}</BpkText>
              <BpkText tagName="p" className={getClassName('FlightItem__grey__2')}>{leg.arrival_airport}</BpkText>
            </div>
            <div className={getClassName('FlightItem__column__2')}>&nbsp;</div>
            <div className={getClassName('FlightItem__column__1')}>&nbsp;</div>
            <div className={getClassName('FlightItem__column__2')}>
              <BpkText tagName="p">{getFlightDuration(leg.duration_mins)}</BpkText>
              <BpkText tagName="p" className={getClassName(getFlightStops(leg.stops).css)}>{getFlightStops(leg.stops).value}</BpkText>
            </div>
          </div>
        ),
      )}
      <div className={getClassName('FlightItem__bottom')}>
        <div className={getClassName('FlightItem__row')}>
          <div className={getClassName('FlightItem__column__8')}>
            <BpkText tagName="h3" className={getClassName('FlightItem__price')}>{flight.price}</BpkText>
            <BpkText tagName="p" className={getClassName('FlightItem__grey__4')}>{flight.agent}</BpkText>
          </div>
          <div className={getClassName('FlightItem__column__1')}>&nbsp;</div>
          <div className={getClassName('FlightItem__column__2')}>
            <button className={getClassName('FlightItem__button')}>Select</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

FlightItem.PropTypes = {
  flight: PropTypes.any,
  legs: PropTypes.any,
};

export default FlightItem;
