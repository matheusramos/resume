import React, { Fragment } from 'react';
import styles from './MainSection.css';

const MainSection = props => (
  <Fragment>
    <h2 className={styles.title}>{props.title}</h2>
    {props.children}
  </Fragment>
);

export default MainSection;
