import React from 'react';
import styles from './Sidebar.css';

const Sidebar = props => <div className={styles.root}>{props.children}</div>;

export default Sidebar;
