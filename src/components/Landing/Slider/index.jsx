import React from 'react';
import './style.scss';
export default function Slider(props) {
  return (
    <div className="slider">
      <div className={`slider-one ${props.type === '1' ? 'active' : ''}`}></div>
      <div className={`slider-two ${props.type === '2' ? 'active' : ''}`}></div>
      <div
        className={`slider-three ${props.type === '3' ? 'active' : ''}`}
      ></div>
    </div>
  );
}
