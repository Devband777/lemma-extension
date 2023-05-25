import React, { useState } from 'react';
import LanguageDropdown from './LanguageDropdown';
import FontDropdown from './FontDropdown';
import logo from '../../assets/img/icon-34.png';
import './style.scss';

export default function Header() {
  const [state, setFont] = useState(0);

  function handleFontClick() {
    setFont(1);
  }
  function handleLanguageClick() {
    setFont(2);
  }
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
          <LanguageDropdown
            onState={state}
            onButtonClick={handleLanguageClick}
          />
        </div>
        <div className="header-dropdowngroup-right">
          <FontDropdown onState={state} onButtonClick={handleFontClick} />
        </div>
      </div>
    </div>
  );
}
