import React from 'react';
import logo from '../../../assets/img/introimage.png';
import Partial from '../../Partial';
import './style.scss';
export default function Container() {
  return (
    <div className="container">
      <div className="container-header">
        <div className="container-header-title">Generate a timeline </div>
        <div className="container-header-description">
          Automatically create a timeline with key points of information.
        </div>
      </div>
      <div className="container-image">
        <img src={logo} alt="logo" />
      </div>
      <div className="container-wrapper">
        <Partial />
        <Partial />
        <Partial />
        <div className="container-wrapper-timeline" />
      </div>
    </div>
  );
}
