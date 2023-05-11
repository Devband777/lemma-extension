import React, { useState } from 'react';
import Home from '../Home';
import './style.scss';
import info from '../../assets/img/info.png';
import { Link } from 'route-lite';
export default function Protip() {
  return (
    <div className="protip">
      <div className="protip-header">
        PRO TIP
        <img src={info} alt="logo" />
      </div>
      <div className="protip-container">
        <Link component={Home}>
          Click or type / to select frequently used actions.
          <div className="protip-container-link">Dismiss</div>
        </Link>
        <span>Ex: /show video timeline</span>
      </div>
    </div>
  );
}
