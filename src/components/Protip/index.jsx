import React, { useState } from 'react';
import './style.scss';
import info from '../../assets/img/system_circle-info.svg';
import Home from '../Home';
export default function Protip() {
  const [isDismiss, setIsDismiss] = useState(false);
  const dismissClick = () => {
    setIsDismiss(true);
  };
  return (
    <div className={`protip ${isDismiss ? 'hiden' : ''}`}>
      <div className="protip-header">
        PRO TIP
        <img src={info} alt="logo" />
      </div>
      <div className="protip-container">
        Click or type / to select frequently used actions.
        <div className="protip-container-link" onClick={dismissClick}>
          Dismiss
        </div>
        <span>Ex: /show video timeline</span>
      </div>
      <div className="protip-body">
        <Home />
      </div>
    </div>
  );
}
