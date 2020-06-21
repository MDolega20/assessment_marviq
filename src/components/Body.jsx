import React, { Component } from 'react';

import Main from './body/Main';

class Body extends Component {
  devMode() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      console.log(this.props);
    }
  }
  render() {
    return (
      <>
        <Main />
      </>
    );
  }
}

export default Body;