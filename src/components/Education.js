import React from 'react';
import PropTypes from 'prop-types';
import MainEntry from './MainEntry';

const Education = props => (
  <MainEntry
    title={props.degree}
    place={props.institute}
    startDate={props.startDate}
    endDate={props.endDate}
    description={props.description}
  />
);

Education.propTypes = {
  degree: PropTypes.string,
  institute: PropTypes.string,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date),
  description: PropTypes.string,
};

export default Education;
