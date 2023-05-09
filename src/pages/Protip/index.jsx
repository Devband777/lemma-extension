import React, { useState } from 'react';
import './style.scss';
import info from '../../assets/img/info.png';
export default function Protip() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={`protip ${isExpanded ? 'hidden' : ''}`}>
      <div className="protip-header">
        PRO TIP
        <img src={info} alt="logo" />
      </div>
      <div className="protip-container">
        <div onClick={handleClick}>
          Click or type / to select frequently used actions. Dismiss
        </div>
        <span>Ex: /show video timeline</span>
      </div>
    </div>
  );
}
