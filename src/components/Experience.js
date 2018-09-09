import React from 'react';
import PropTypes from 'prop-types';
import MainEntry from './MainEntry';

const Experience = props => (
  <MainEntry
    title={props.position}
    place={props.company}
    startDate={props.startDate}
    endDate={props.endDate}
    description={props.description}
  />
);

Experience.propTypes = {
  company: PropTypes.string,
  position: PropTypes.string,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date),
  description: PropTypes.string,
};

export default Experience;
