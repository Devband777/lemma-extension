import React from 'react';
import logo3 from '../../assets/img/skipimage.png';
import logo1 from '../../assets/img/introimage1.png';
import logo from '../../assets/img/icon-34.png';
import logo2 from '../../assets/img/google.png';
import CardButton from '../CardButton';
import EmailSignUpNext from '../EmailSignUpNext';
import { Link } from 'route-lite';
import './style.scss';
export default function EmailSignUp() {
  return (
    <div className="emailsignup">
      <div className="emailsignup-header">
        <div className="emailsignup-header-title">
          <div className="emailsignup-header-title-logo">
            <div className="emailsignup-header-title-logo-image">
              <img src={logo} alt="asd" />
            </div>
            Lemma
          </div>
          <div className="emailsignup-header-title-text">
            An AI-assisted personal learning assistant for YouTube
          </div>
        </div>
        <div className="emailsignup-header-body">
          <div className="emailsignup-header-body-video">
            <img src={logo1} alt="asd" />
            <div className="emailsignup-header-body-video-card1">
              <CardButton text="Translate" />
            </div>
            <div className="emailsignup-header-body-video-card2">
              <CardButton text="Transcribe" />
            </div>
            <div className="emailsignup-header-body-video-card3">
              <CardButton text="Timeline" />
            </div>
            <div className="emailsignup-header-body-video-card4">
              <CardButton text="Summarize" />
            </div>
            <div className="emailsignup-header-body-video-card5">
              <CardButton text="Prompt Video" />
            </div>
            <div className="emailsignup-header-body-video-card6">
              <CardButton text="Add more..." />
            </div>
          </div>
          <div className="emailsignup-header-body-container">
            <div className="emailsignup-header-body-container-signgoogle">
              <div className="emailsignup-header-body-container-signgoogle-logo">
                <img src={logo2} alt="asd" />
              </div>
              Sign up with Google
            </div>
            <div className="emailsignup-header-body-container-devider">
              <div className="emailsignup-header-body-container-devider-line" />
              Or
              <div className="emailsignup-header-body-container-devider-line" />
            </div>
            <div className="emailsignup-header-body-container-emailsignup">
              <div className="emailsignup-header-body-container-emailsignup-input">
                <div className="emailsignup-header-body-container-emailsignup-input-label">
                  <span>*</span>Email
                </div>
                <div className="emailsignup-header-body-container-emailsignup-input-input">
                  <input placeholder="ex: hello@gmail.com" />
                </div>
              </div>
              <Link component={EmailSignUpNext}>
                <div className="emailsignup-header-body-container-emailsignup-button">
                  Continue
                  <img src={logo3} alt="logo" />
                </div>
              </Link>
            </div>
            <div className="emailsignup-header-body-container-footer">
              Got Feedback?
              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
      <div className="emailsignup-footer">
        <div className="emailsignup-footer-feedback">
          Have an account?
          <span>Contact Lemma support</span>
        </div>
        <div className="emailsignup-footer-version">Version: #.#.#</div>
      </div>
    </div>
  );
}
