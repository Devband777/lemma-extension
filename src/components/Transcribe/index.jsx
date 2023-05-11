import React, { useState } from 'react';
import './style.scss';
import logo from '../../assets/img/icon-34.png';
import dropdown from '../../assets/img/dropdownarrow.png';
import Partial from '../Partial';
import TextTitle from '../TextTitle';
export default function Timeline() {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
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
              className={`dropdownimg ${isExpanded ? 'hidden' : ''}`}
              onClick={handleClick}
            />
            <img src={logo} alt="logo" className="avatarimg" />
          </div>
        </div>
        /Transcribe from 00:00 to 00:52
      </div>
      <div className={`transcribe-timeline ${isExpanded ? 'hidden' : ''}`}>
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
