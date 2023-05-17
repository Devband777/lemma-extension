import React, { useState } from 'react';
import Router from 'route-lite';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignUp from '../../components/SignUp';
import './Popup.scss';

const Popup = () => {
  const [stateValue, setStateValue] = useState('');
  const handleCallback = (childData) => {
    setStateValue(childData);
  };
  console.log(stateValue);
  return (
    <div className="App">
      <div className={`App-header ${stateValue ? 'hien' : ''}`}>
        <Header />
      </div>
      <Router>
        <SignUp callback={handleCallback} />
      </Router>
      <div
        style={{ height: '70px' }}
        className={` ${stateValue ? 'hien' : ''}`}
      />
      <div className={`App-footer ${stateValue ? 'hien' : ''}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Popup;
