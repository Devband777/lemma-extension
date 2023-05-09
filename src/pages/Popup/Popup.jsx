import React from 'react';
import Router from 'route-lite';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Landing from '../../pages/Landing';
import './Popup.scss';

const Popup = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Landing />
      </Router>
      <Footer />
    </div>
  );
};

export default Popup;
