import React, { useState, useRef, useEffect } from 'react';
import logo1 from '../../assets/img/single.png';
import logo2 from '../../assets/img/inputenter.png';
import FooterDropupBox from './FooterDropupBox';
import Home from '../Home';
import { Link } from 'route-lite';
import './style.scss';

export default function Footer() {
  const textareaRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const autoGrow = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '5px';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleInputClick = () => {
    setInputValue(textareaRef.current.value);
  };

  useEffect(() => {
    autoGrow();
  }, []);

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container-single" onClick={handleClick}>
          <img src={logo1} alt="logo" />
        </div>
        <div className="footer-container-input">
          <textarea
            ref={textareaRef}
            onChange={autoGrow}
            placeholder="Ask me anything about this video.... "
          />
        </div>
      </div>
      <Link component={() => <Home inputValue={inputValue} />}>
        <div className="footer-inputicon" onClick={handleInputClick}>
          <img src={logo2} alt="logo" />
        </div>
      </Link>
      <div
        className={`box ${isExpanded ? 'hidden' : ''}`}
        onClick={handleClick}
      >
        <FooterDropupBox />
      </div>
    </div>
  );
}
