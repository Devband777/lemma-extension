import React, { useState } from 'react';
import './style.scss';
import logo from '../../assets/img/icon-34.png';
import like from '../../assets/img/like.png';
import dislike from '../../assets/img/dislike.png';
import Partial from './Partial';
export default function Timeline() {
  const [isLikeActive, setIsLikeActive] = useState(false);
  const handleLikeClick = () => {
    setIsLikeActive(!isLikeActive);
  };
  const [isDislikeActive, setIsDislikeActive] = useState(false);
  const handleDislikeClick = () => {
    setIsDislikeActive(!isDislikeActive);
  };
  return (
    <div className="timeline">
      <div className="timeline-userprompt">
        <div className="timeline-userprompt-title">
          PROMPT
          <img src={logo} alt="logo" />
        </div>
        /Timeline
      </div>
      <div className="timeline-timeline">
        <div className="timeline-timeline-title">
          <div className="timeline-timeline-title-container">
            <img src={logo} alt="logo" />
            AI RESPONSE
          </div>
          <div className="timeline-timeline-title-rating">
            <img
              src={like}
              alt="logo"
              className={`${isLikeActive ? 'active' : ''}`}
              onClick={handleLikeClick}
            />
            <img
              src={dislike}
              alt="logo"
              className={`${isDislikeActive ? 'active' : ''}`}
              onClick={handleDislikeClick}
            />
          </div>
        </div>
        <div className="timeline-timeline-container">
          <Partial />
          <Partial />
          <Partial />
          <Partial />
          <div className="timeline-timeline-container-timeline" />
        </div>
      </div>
      <div className="timeline-text">
        <div className="timeline-text-title">
          <div className="timeline-text-title-container">
            <img src={logo} alt="logo" />
            AI RESPONSE
          </div>
          <div className="timeline-text-title-rating">
            <img
              src={like}
              alt="logo"
              className={`${isLikeActive ? 'active' : ''}`}
              onClick={handleLikeClick}
            />
            <img
              src={dislike}
              alt="logo"
              className={`${isDislikeActive ? 'active' : ''}`}
              onClick={handleDislikeClick}
            />
          </div>
        </div>
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
