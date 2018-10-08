import React from 'react';
import PropTypes from 'prop-types';

import styles from './Bar.css';

const Bar = props => (
  <div className={styles.root}>
    <h4 className={styles.name}>{props.name}</h4>
    <div className={styles.barBorder}>
      <div className={styles.bar} style={{ width: `${props.level}%` }} />
    </div>
  </div>
);

Bar.propTypes = {
  name: PropTypes.string,
  level: PropTypes.number,
};

export default Bar;
