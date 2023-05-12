import React from 'react';
import logo3 from '../../assets/img/skipimage.png';
import logo1 from '../../assets/img/introimage1.png';
import logo from '../../assets/img/icon-34.png';
import logo2 from '../../assets/img/google.png';
import CardButton from '../CardButton';
import './style.scss';
export default function EmailSignUpNext() {
  return (
    <div className="emailsignupnext">
      <div className="emailsignupnext-header">
        <div className="emailsignupnext-header-title">
          <div className="emailsignupnext-header-title-logo">
            <div className="emailsignupnext-header-title-logo-image">
              <img src={logo} alt="asd" />
            </div>
            Lemma
          </div>
          <div className="emailsignupnext-header-title-text">
            An AI-assisted personal learning assistant for YouTube
          </div>
        </div>
        <div className="emailsignupnext-header-body">
          <div className="emailsignupnext-header-body-video">
            <img src={logo1} alt="asd" />
            <div className="emailsignupnext-header-body-video-card1">
              <CardButton text="Translate" />
            </div>
            <div className="emailsignupnext-header-body-video-card2">
              <CardButton text="Transcribe" />
            </div>
            <div className="emailsignupnext-header-body-video-card3">
              <CardButton text="Timeline" />
            </div>
            <div className="emailsignupnext-header-body-video-card4">
              <CardButton text="Summarize" />
            </div>
            <div className="emailsignupnext-header-body-video-card5">
              <CardButton text="Prompt Video" />
            </div>
            <div className="emailsignupnext-header-body-video-card6">
              <CardButton text="Add more..." />
            </div>
          </div>
          <div className="emailsignupnext-header-body-container">
            <div className="emailsignupnext-header-body-container-signgoogle">
              <div className="emailsignupnext-header-body-container-signgoogle-logo">
                <img src={logo2} alt="asd" />
              </div>
              Sign up with Google
            </div>
            <div className="emailsignupnext-header-body-container-devider">
              <div className="emailsignupnext-header-body-container-devider-line" />
              Or
              <div className="emailsignupnext-header-body-container-devider-line" />
            </div>
            <div className="emailsignupnext-header-body-container-emailsignup">
              <div className="emailsignupnext-header-body-container-emailsignup-input">
                <div className="emailsignupnext-header-body-container-emailsignup-input-label">
                  <span>*</span>Email
                </div>
                <div className="emailsignupnext-header-body-container-emailsignup-input-input">
                  <input placeholder="ex: hello@gmail.com" />
                </div>
              </div>
              <div className="emailsignupnext-header-body-container-emailsignup-button">
                Continue
                <img src={logo3} alt="logo" />
              </div>
            </div>
            <div className="emailsignupnext-header-body-container-footer">
              Got Feedback?
              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
      <div className="emailsignupnext-footer">
        <div className="emailsignupnext-footer-feedback">
          Have an account?
          <span>Contact Lemma support</span>
        </div>
        <div className="emailsignupnext-footer-version">Version: #.#.#</div>
      </div>
    </div>
  );
}
