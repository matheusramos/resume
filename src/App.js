import React, { Component } from 'react';
import info from './data.json';

class App extends Component {
  render() {
    return <pre>{JSON.stringify(info, null, 2)}</pre>;
  }
}

export default App;
