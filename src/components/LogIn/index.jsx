import React from 'react';
import { Link } from 'route-lite';
import Landing from '../Landing';
import './style.scss';
export default function LogIn(props) {
  const sendData = () => {
    props.callback('passwordrecovery');
  };
  const signupWithEmail = () => {
    props.callback('');
  };
  return (
    <div className="login">
      <div className="login-input">
        <div className="login-input-label">
          <span>*</span>Username
        </div>
        <div className="login-input-input">
          <input placeholder="ex: something unique" type="text" />
        </div>
      </div>
      <div className="login-input">
        <div className="login-input-label">
          <span>*</span>Password
        </div>
        <div className="login-input-input">
          <input placeholder="input password" type="password" />
        </div>
      </div>
      <div className="login-button">
        <Link component={Landing} onClick={signupWithEmail}>
          Log In
        </Link>
      </div>
      <div className="login-link" onClick={sendData}>
        Forgot Password?
      </div>
    </div>
  );
}
