import React, { Fragment } from 'react';

export default props => (
  <Fragment>
    <h2>{props.title}</h2>
    {props.children}
  </Fragment>
);
