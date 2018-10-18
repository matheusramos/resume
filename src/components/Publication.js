import React from 'react';
import PropTypes from 'prop-types';
import MainEntry from './MainEntry';

const Publication = props => (
  <MainEntry
    title={props.title}
    place={props.publisher}
    startDate={props.date}
  />
);

Publication.propTypes = {
  title: PropTypes.string,
  publisher: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Publication;
