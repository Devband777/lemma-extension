import React from 'react';
import logo from '../../assets/img/skipimage.png';
import './style.scss';
export default function EmailSignUp() {
  return (
    <div className="emailsignup">
      <div className="emailsignup-input">
        <div className="emailsignup-input-label">
          <span>*</span>Email
        </div>
        <div className="emailsignup-input-input">
          <input placeholder="ex: hello@gmail.com" type="email" />
        </div>
      </div>
      <div className="emailsignup-button">
        Continue
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
