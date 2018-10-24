import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './MainEntry.css';

function toRangeString(startDate, endDate) {
  if (!startDate) {
    return '';
  }

  const start = moment(startDate).format('MMMM YYYY');

  let end;
  if (!endDate) {
    end = '';
  } else if (endDate === +Infinity) {
    end = 'Present';
  } else {
    end = moment(endDate).format('MMMM YYYY');
  }

  return start.concat(end ? ` - ${end}` : '');
}

const MainEntry = props => {
  const { title, place, startDate, endDate, description } = props;
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>
        <span>{title}</span>
        <span className={styles.separator}>@</span>
        <span>{place}</span>
      </h3>
      <p>{toRangeString(startDate, endDate)}</p>
      <p className={styles.description}>{description}</p>
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
  endDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date), // end date
    PropTypes.number, // infinity means it is currently happening
  ]),
  description: PropTypes.string,
};

export default MainEntry;
