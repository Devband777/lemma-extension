import React, { useState, useRef, useEffect } from 'react';
import logo1 from '../../assets/img/system_forward-slash.svg';
import logo2 from '../../assets/img/system_paper-plane-top.svg';
import logo3 from '../../assets/img/icon.png';
import logo4 from '../../assets/img/close.png';
import logo5 from '../../assets/img/check.svg';
import FooterDropupBox from './FooterDropupBox';
import Home from '../Home';
import { Link } from 'route-lite';
import './style.scss';

export default function Footer(props) {
  const textareaRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [stateValue, setStateValue] = useState('');
  const handleCallback = (childData) => {
    setStateValue(childData);
  };
  if (stateValue === 'logout') {
    props.callback('logout');
  }
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
    <div className={`footer ${stateValue === 'change' ? 'changeavatar' : ''}`}>
      <div className="footer-container">
        <div className="footer-container-single" onClick={handleClick}>
          <img src={logo1} alt="logo" />
        </div>
        <div className="footer-container-input">
          <textarea
            disabled={disabled}
            ref={textareaRef}
            onChange={autoGrow}
            placeholder="Ask me anything about this video.... "
          />
        </div>
        <div className="footer-container-avatar">
          <img
            src={logo3}
            alt="logo"
            className="footer-container-avatar-image"
          />
          <div className="footer-container-avatar-container">
            Add image
            <br />
            <span>or drag and drop</span>
          </div>
        </div>
      </div>
      <Link
        component={() => <Home inputValue={inputValue} clickitem="collase" />}
      >
        <div className="footer-inputicon" onClick={handleInputClick}>
          <img src={logo2} alt="logo" />
        </div>
      </Link>
      <div className="footer-inputicongroup">
        <img src={logo4} alt="logo" />
        <div className="footer-inputicongroup-devider" />
        <img src={logo5} alt="logo" />
      </div>
      <div
        className={`box ${isExpanded ? 'hidden' : ''}`}
        onClick={handleClick}
      >
        <FooterDropupBox callback={handleCallback} />
      </div>
    </div>
  );
}
