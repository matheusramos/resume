import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './MainEntry.css';

function toRangeString(startDate, endDate) {
  if (!startDate) {
    return '';
  }

  const start = moment(startDate).format('MMMM YYYY');
  const end = endDate ? moment(endDate).format('MMMM YYYY') : 'Present';

  return `${start} - ${end}`;
}

const MainEntry = props => {
  const { title, place, startDate, endDate, description } = props;
  return (
    <div>
      <h3 className={styles.title}>
        <span>{title}</span>
        <span className={styles.separator}>@</span>
        <span>{place}</span>
      </h3>
      <p>{toRangeString(startDate, endDate)}</p>
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
