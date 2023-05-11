import React, { useState } from 'react';
import './style.scss';
import logo from '../../assets/img/icon-34.png';
import dropdown from '../../assets/img/dropdownarrow.png';
import Partial from '../Partial';
import TextTitle from '../TextTitle';
export default function Timeline() {
  const [isTranscribeExpand, setIsTranscribeExpand] = useState(false);
  const handleClick = () => {
    setIsTranscribeExpand(!isTranscribeExpand);
  };
  return (
    <div className="transcribe">
      <div className="transcribe-userprompt">
        <div className="transcribe-userprompt-title">
          PROMPT
          <div>
            <img
              src={dropdown}
              alt="logo"
              className={`dropdownimg ${isTranscribeExpand ? 'hidden' : ''}`}
              onClick={handleClick}
            />
            <img src={logo} alt="logo" className="avatarimg" />
          </div>
        </div>
        /Transcribe from 00:00 to 00:52
      </div>
      <div
        className={`transcribe-timeline ${isTranscribeExpand ? 'hidden' : ''}`}
      >
        <TextTitle />
        <div className="transcribe-timeline-container">
          <Partial />
          <Partial />
          <Partial />
          <Partial />
        </div>
      </div>
    </div>
  );
}
