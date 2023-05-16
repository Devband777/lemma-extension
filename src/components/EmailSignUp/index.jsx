import React, { useState } from 'react';
import { Link } from 'route-lite';
import logo from '../../assets/img/skipimage.png';
import Landing from '../Landing';
import './style.scss';
export default function EmailSignUp(props) {
  const [isSecondClick, setIsSecondClick] = useState(false);
  const handleClick = () => {
    setIsSecondClick(true);
  };
  return (
    <div className="emailsignup">
      <div className={`emailsignup-input ${isSecondClick ? 'hidden' : ''}`}>
        <div className="emailsignup-input-label">
          <span>*</span>Email
        </div>
        <div className="emailsignup-input-input">
          <input placeholder="ex: hello@gmail.com" type="email" />
        </div>
      </div>
      <div className={`emailsignup-input ${isSecondClick ? '' : 'hidden'}`}>
        <div className="emailsignup-input-label">
          <span>*</span>Username
        </div>
        <div className="emailsignup-input-input">
          <input placeholder="ex: something unique" type="text" />
        </div>
      </div>
      <div className={`emailsignup-input ${isSecondClick ? '' : 'hidden'}`}>
        <div className="emailsignup-input-label">
          <span>*</span>Password
        </div>
        <div className="emailsignup-input-input">
          <input placeholder="input password" type="password" />
        </div>
      </div>
      <div
        className={`emailsignup-button ${isSecondClick ? 'hidden' : ''}`}
        onClick={handleClick}
      >
        Continue
        <img src={logo} alt="logo" />
      </div>
      <div className={`emailsignup-button ${isSecondClick ? '' : 'hidden'}`}>
        <Link component={Landing}>Continue</Link>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
