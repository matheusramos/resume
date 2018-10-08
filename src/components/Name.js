import React from 'react';
import PropTypes from 'prop-types';
import styles from './Name.css';

const Name = props => (
  <div className={styles.root}>
    <div className={styles.name}>{props.name}</div>
    <div className={styles.name}>{props.surname}</div>
    <h3 className={styles.position}>{props.position}</h3>
  </div>
);

Name.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  position: PropTypes.string,
};

export default Name;
