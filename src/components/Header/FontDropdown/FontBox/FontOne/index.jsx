import React from 'react';
import logo2 from '../../../../../assets/img/check.svg';
import './style.scss';
export default function FontOne(props) {
  let className = 'fontone';
  switch (props.fontkey) {
    case 'Regular':
      className += ' regular';
      break;
    case 'UNDER DEVELOPMENT':
      className += ' large';
      break;
    default:
      className += ' larger';
  }
  return (
    <div className={className}>
      {props.fontkey}
      <img src={logo2} alt="logo" />
    </div>
  );
}
