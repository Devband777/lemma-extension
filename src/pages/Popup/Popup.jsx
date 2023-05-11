import React, { useState } from 'react';
import Router from 'route-lite';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Landing from '../../components/Landing';
import './Popup.scss';

const Popup = () => {
  const [stateValue, setStateValue] = useState('');
  const handleCallback = (childData) => {
    setStateValue(childData);
  };
  return (
    <div className="App">
      <Header />
      <Router>
        <Landing callback={handleCallback} />
      </Router>
      <div style={{ height: '70px' }} />
      <Footer page={stateValue} />
    </div>
  );
};

export default Popup;
