import React, { useState } from 'react';
import './style.scss';
import logo1 from '../../../assets/img/accessibility_textsize.svg';
import logo2 from '../../../assets/img/direction_angle down.svg';
import FontBox from './FontBox';
export default function FontDropdown(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="fontdropdown" onClick={props.onButtonClick}>
      <img src={logo1} className="fontdropdown-logo" alt="logo" />
      <img src={logo2} alt="logo" onClick={handleClick} />
      <div className={`box ${isExpanded ? 'hidden' : ''} `}>
        <FontBox />
      </div>
    </div>
  );
}
