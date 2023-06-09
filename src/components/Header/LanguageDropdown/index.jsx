import React, { useState } from 'react';
import './style.scss';
import LanguageBox from './LanguageBox';
import logo1 from '../../../assets/img/accessibility_language.svg';
import logo2 from '../../../assets/img/direction_angle down.svg';
export default function LanguageDropdown(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="languagedropdown" onClick={props.onButtonClick}>
      <img src={logo1} className="languagedropdown-logo" alt="logo" />
      <img src={logo2} alt="logo" onClick={handleClick} />
      <div
        className={`box 
        ${isExpanded ? 'hidden' : ''}`}
      >
        <LanguageBox />
      </div>
    </div>
  );
}
