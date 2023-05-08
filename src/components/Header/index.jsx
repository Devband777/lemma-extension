import React from 'react';
import LanguageDropdown from './LanguageDropdown';
import FontDropdown from './FontDropdown';
import logo from '../../assets/img/icon-34.png';
import './style.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container-logo">
          <img src={logo} alt="logo" />
        </div>
        <p>LEMMA</p>
      </div>
      <div className="header-dropdowngroup">
        <div className="header-dropdowngroup-left">
          <LanguageDropdown />
        </div>
        <div className="header-dropdowngroup-right">
          <FontDropdown />
        </div>
      </div>
    </div>
  );
}