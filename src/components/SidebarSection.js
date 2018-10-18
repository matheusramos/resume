import React from 'react';
import PropTypes from 'prop-types';
import styles from './SidebarSection.css';

const SidebarSection = props => (
  <div className={styles.root}>
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>{props.title}</h2>
    </div>
    {props.children}
  </div>
);

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default SidebarSection;
