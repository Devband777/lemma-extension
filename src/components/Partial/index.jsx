import React from 'react';
import logo from '../../assets/img/picon.png';
import './style.scss';
export default function Partial() {
  return (
    <div className="partial">
      <div className="partial-timetitle">
        <div className="partial-timetitle-dot" />
        <div className="partial-timetitle-text">00:05</div>
      </div>
      <div className="partial-card">
        Platos 4 ideas for life fulfillment
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
