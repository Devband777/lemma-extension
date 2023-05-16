import React, { useState } from 'react';
import { Link } from 'route-lite';
import logo from '../../assets/img/inputenter.png';
import Landing from '../Landing';
import './style.scss';
export default function PasswordRecovery(props) {
  const [isSecondClick, setIsSecondClick] = useState(false);
  const handleClick = () => {
    setIsSecondClick(true);
  };
  return (
    <div className="passwordrecovery">
      <div className={`passwordrecovery-input ${isSecondClick ? 'hiden' : ''}`}>
        <div className="passwordrecovery-input-label">
          <span>*</span>Email
        </div>
        <div className="passwordrecovery-input-input">
          <input placeholder="ex: hello@gmail.com" type="email" />
        </div>
      </div>
      <div className={`passwordrecovery-input ${isSecondClick ? '' : 'hiden'}`}>
        <div className="passwordrecovery-input-label">
          <span>*</span>Temporary password
        </div>
        <div className="passwordrecovery-input-input">
          <input placeholder="ex: 123456" type="text" required />
        </div>
      </div>
      <div className={`passwordrecovery-input ${isSecondClick ? '' : 'hiden'}`}>
        <div className="passwordrecovery-input-label">
          <span>*</span>New Password
        </div>
        <div className="passwordrecovery-input-input">
          <input placeholder="enter new password" type="password" required />
          Please enter a new password for your account.
        </div>
      </div>
      <div
        className={`passwordrecovery-button ${isSecondClick ? 'hiden' : ''}`}
        onClick={handleClick}
      >
        Send reset link
        <img src={logo} alt="logo" />
      </div>
      <div
        className={`passwordrecovery-button ${isSecondClick ? '' : 'hiden'}`}
      >
        <Link component={Landing}>Log in</Link>
      </div>
    </div>
  );
}
