import React from 'react';
import styles from './Section.css';

const Section = props => (
  <div className={styles.root}>
    <h2 className={styles.title}>{props.title}</h2>
    {props.children}
  </div>
);

export default Section;
