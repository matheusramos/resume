import React from 'react';
import PropTypes from 'prop-types';

const MainEntry = props => {
  const { title, place, startDate, endDate, description } = props;
  return (
    <div>
      <h3>
        {title} @ {place}
      </h3>
      <p>
        {startDate && startDate.toISOString()} -{' '}
        {endDate && endDate.toISOString()}
      </p>
      <p>{description}</p>
    </div>
  );
};

MainEntry.defaultProps = {
  place: null,
  startDate: null,
  endDate: null,
  description: null,
};

MainEntry.propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.string,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date),
  description: PropTypes.string,
};

export default MainEntry;
