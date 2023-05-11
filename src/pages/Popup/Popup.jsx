import React, { useState } from 'react';
import Router from 'route-lite';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Landing from '../../components/Landing';
import './Popup.scss';

const Popup = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Landing />
      </Router>
      <div style={{ height: '70px' }} />
      <Footer />
    </div>
  );
};

export default Popup;
