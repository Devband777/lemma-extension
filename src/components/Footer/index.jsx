import React, { useState } from 'react';
import logo1 from '../../assets/img/single.png';
import logo2 from '../../assets/img/inputenter.png';
import FooterDropupBox from './FooterDropupBox';
import './style.scss';
export default function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container-single" onClick={handleClick}>
          <img src={logo1} alt="logo" />
        </div>
        <div className="footer-container-input">
          <input
            type="text"
            placeholder="Ask me anything about this video.... "
          />
        </div>
      </div>
      <div className="footer-inputicon">
        <img src={logo2} alt="logo" />
      </div>
      <div className={`box ${isExpanded ? 'hidden' : ''}`}>
        <FooterDropupBox />
      </div>
    </div>
  );
}
