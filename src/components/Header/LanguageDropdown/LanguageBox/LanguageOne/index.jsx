import React from 'react';
import logo2 from '../../../../../assets/img/check.svg';
import './style.scss';
export default function LanguageOne(props) {
  return (
    <div className="languageone">
      {props.languagekey}
      <img src={logo2} alt="logo" />
    </div>
  );
}
