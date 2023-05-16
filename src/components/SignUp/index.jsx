import React, { useState } from 'react';
import './style.scss';
import { Link } from 'route-lite';
import Landing from '../Landing';
import EmailSignUp from '../EmailSignUp';
import PasswordRecovery from '../PasswordRecovery';
import LogIn from '../LogIn';
import CardButton from '../CardButton';
import logo1 from '../../assets/img/introimage1.png';
import logo from '../../assets/img/icon-34.png';
import logo2 from '../../assets/img/google.png';
export default function Signup() {
  const [isFirstClick, setIsFirstClick] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  const emailsignup = () => {
    setIsFirstClick(true);
  };
  const loginClick = () => {
    setIsLogIn(true);
  };
  const [passwordRecoveryButton, setPasswordRecoveryButton] = useState('');

  const passwordRecoveryButtonClick = (passwordRecoveryButton) => {
    setPasswordRecoveryButton(passwordRecoveryButton);
  };
  return (
    <div className="signup">
      <div className="signup-header">
        <div className="signup-header-title">
          <div className="signup-header-title-logo">
            <div className="signup-header-title-logo-image">
              <img src={logo} alt="asd" />
            </div>
            Lemma
          </div>
          <div className="signup-header-title-text">
            An AI-assisted personal learning assistant for YouTube
          </div>
        </div>
        <div className="signup-header-body">
          <div className="signup-header-body-video">
            <img src={logo1} alt="asd" />
            <div className="signup-header-body-video-card1">
              <CardButton text="Translate" />
            </div>
            <div className="signup-header-body-video-card2">
              <CardButton text="Transcribe" />
            </div>
            <div className="signup-header-body-video-card3">
              <CardButton text="Timeline" />
            </div>
            <div className="signup-header-body-video-card4">
              <CardButton text="Summarize" />
            </div>
            <div className="signup-header-body-video-card5">
              <CardButton text="Prompt Video" />
            </div>
            <div className="signup-header-body-video-card6">
              <CardButton text="Add more..." />
            </div>
          </div>
          <div className="signup-header-body-container">
            <Link component={Landing}>
              <div className="signup-header-body-container-signgoogle">
                <div className="signup-header-body-container-signgoogle-logo">
                  <img src={logo2} alt="asd" />
                </div>
                <span
                  className={`signup-header-body-container-signgoogle-signup ${
                    isLogIn ? 'hiden' : ''
                  }`}
                >
                  Sign up with Google
                </span>
                <span
                  className={`signup-header-body-container-signgoogle-login ${
                    isLogIn ? 'hiden' : ''
                  }`}
                >
                  Log in with Google
                </span>
              </div>
            </Link>
            <div className="signup-header-body-container-devider">
              <div className="signup-header-body-container-devider-line" />
              Or
              <div className="signup-header-body-container-devider-line" />
            </div>
            <div
              className={`signup-header-body-container-generalbutton ${
                isFirstClick ? 'hiden' : ''
              } ${isLogIn ? 'hiden' : ''}
              `}
              onClick={emailsignup}
            >
              Continue with email
            </div>
            <div
              className={`signup-header-body-container-signupemail ${
                isFirstClick ? 'hiden' : ''
              }`}
            >
              <EmailSignUp />
            </div>
            <div
              className={`signup-header-body-container-login ${
                isLogIn ? 'hiden' : ''
              }${
                passwordRecoveryButton === 'passwordrecovery' ? 'hiden2' : ''
              }`}
            >
              <LogIn callback={passwordRecoveryButtonClick} />
            </div>
            <div
              className={`signup-header-body-container-passwordrecovery ${
                passwordRecoveryButton === 'passwordrecovery' ? 'hiden' : ''
              }`}
            >
              <PasswordRecovery />
            </div>
            <div
              className={`signup-header-body-container-footer ${
                isLogIn ? 'hiden' : ''
              }${isFirstClick ? 'hiden' : ''}`}
            >
              Have an account?
              <span onClick={loginClick}>Login</span>
            </div>
          </div>
        </div>
      </div>
      <div className="signup-footer">
        <div className="signup-footer-feedback">
          Got Feedback?
          <span>Contact Lemma support</span>
        </div>
        <div className="signup-footer-version">Version: #.#.#</div>
      </div>
    </div>
  );
}
