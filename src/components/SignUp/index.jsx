import React from 'react';
import './style.scss';
import { Link } from 'route-lite';
import Landing from '../Landing';
import EmailSignUp from '../EmailSignUp';
import CardButton from '../CardButton';
import logo1 from '../../assets/img/introimage1.png';
import logo from '../../assets/img/icon-34.png';
import logo2 from '../../assets/img/google.png';
export default function Signup() {
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
                Sign up with Google
              </div>
            </Link>
            <div className="signup-header-body-container-devider">
              <div className="signup-header-body-container-devider-line" />
              Or
              <div className="signup-header-body-container-devider-line" />
            </div>
            <Link component={EmailSignUp}>
              <div className="signup-header-body-container-generalbutton">
                Continue with email
              </div>
            </Link>
            <div className="signup-header-body-container-footer">
              Got Feedback?
              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
      <div className="signup-footer">
        <div className="signup-footer-feedback">
          Have an account?
          <span>Contact Lemma support</span>
        </div>
        <div className="signup-footer-version">Version: #.#.#</div>
      </div>
    </div>
  );
}
