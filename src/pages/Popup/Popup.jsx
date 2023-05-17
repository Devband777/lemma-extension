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
      <div className={`App-header ${stateValue === 'visit' ? 'hiden' : ''}`}>
        <Header />
      </div>
      <Router>
        <SignUp callback={handleCallback} />
      </Router>
      <div className={`App-footer ${stateValue === 'visit' ? 'hiden' : ''}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Popup;
