import React, { useState } from 'react';
import './style.scss';
import logo from '../../assets/img/icon-34.png';
import dropdown from '../../assets/img/direction_angle down.svg';
import Partial from '../Partial';
import TextTitle from '../TextTitle';
export default function Timeline(props) {
  const [isTimelineExpand, setIsTimelineExpand] = useState(false);
  const handleClick = () => {
    setIsTimelineExpand(!isTimelineExpand);
  };
  const [isDropExpanded, setIsDropExpanded] = useState(
    props.clickitem === 'timeline'
  );
  const handleDropClick = () => {
    setIsDropExpanded(!isDropExpanded);
    if (isTimelineExpand === true) setIsTimelineExpand(!isTimelineExpand);
  };
  return (
    <div className="timeline">
      <div className="timeline-userprompt">
        <div className="timeline-userprompt-title">
          PROMPT
          <div>
            <img
              src={dropdown}
              alt="logo"
              className={`dropdownimg ${isDropExpanded ? 'hidden' : ''}`}
              onClick={handleDropClick}
            />
            <img src={logo} alt="logo" className="avatarimg" />
          </div>
        </div>
        /Timeline
      </div>
      <div className={`timeline-timeline ${isDropExpanded ? 'hidden' : ''}`}>
        <TextTitle />
        <div className="timeline-timeline-container">
          <div className="timeline-timeline-container-timeline" />

          <div onClick={handleClick}>
            <Partial />
          </div>
          <div onClick={handleClick}>
            <Partial />
          </div>
          <div onClick={handleClick}>
            <Partial />
          </div>
          <div onClick={handleClick}>
            <Partial />
          </div>
        </div>
      </div>
      <div className={`timeline-text ${isTimelineExpand ? 'hidden' : ''}`}>
        <TextTitle />
        <div className="timeline-text-introduction">
          Introduction: 00:00 - 01:03
        </div>
        <div className="timeline-text-partial">
          <span>Socrates (469/470 BCE - 399 BCE)</span> was a classical Greek
          philosopher who is credited as one of the founders of Western
          philosophy. He is best known for his method of questioning, called the
          Socratic method, which involved asking a series of questions to
          stimulate critical thinking and expose the contradictions in someone's
          beliefs. Socrates was highly critical of the Athenian democracy and
          was sentenced to death by drinking hemlock for allegedly corrupting
          the youth and impiety.
        </div>
      </div>
    </div>
  );
}
