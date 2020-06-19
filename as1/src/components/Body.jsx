import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Head from './head/Head';
import Main from './body/Main';
import Header from './body/Header';
import Footer from './body/Footer';

class Body extends Component {
  devMode() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      console.log(this.props);
    }
  }
  render() {

    return (
      <>
        <Head />
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default Body;