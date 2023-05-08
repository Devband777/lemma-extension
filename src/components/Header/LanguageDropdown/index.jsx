import React, { useState } from 'react';
import './style.scss';
import LanguageBox from './LanguageBox';
import logo1 from '../../../assets/img/dropdownicon.png';
import logo2 from '../../../assets/img/dropdownarrow.png';
export default function LanguageDropdown() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="languagedropdown" onClick={handleClick}>
      <img src={logo1} className="languagedropdown-logo" alt="logo" />
      <img src={logo2} alt="logo" />
      <div className={`box ${isExpanded ? 'hidden' : ''}`}>
        <LanguageBox />
      </div>
    </div>
  );
}