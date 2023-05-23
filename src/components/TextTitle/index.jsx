import React, { useState } from 'react';
import './style.scss';
import logo from '../../assets/img/icon-34.png';
import like from '../../assets/img/application_thumbs up.svg';
import dislike from '../../assets/img/application_thumbs down.svg';
import likeclick from '../../assets/img/application_Solid_thumbs up.svg';
import dislikeclick from '../../assets/img/application_Solid_thumbs down.svg';
export default function TextTitle() {
  const [isLikeActive, setIsLikeActive] = useState(false);
  const handleLikeClick = () => {
    setIsLikeActive(!isLikeActive);
    if (isDislikeActive) setIsDislikeActive(!isDislikeActive);
  };
  const [isDislikeActive, setIsDislikeActive] = useState(false);
  const handleDislikeClick = () => {
    setIsDislikeActive(!isDislikeActive);
    if (isLikeActive) setIsLikeActive(!isLikeActive);
  };
  return (
    <div className="texttitle">
      <div className="texttitle-container">
        <img src={logo} alt="logo" />
        AI RESPONSE
      </div>
      <div className="texttitle-rating">
        <img
          src={like}
          alt="logo"
          className={`no ${isLikeActive ? 'active' : ''}`}
          onClick={handleLikeClick}
        />
        <img
          src={likeclick}
          alt="logo"
          className={`click ${isLikeActive ? 'active' : ''}`}
          onClick={handleLikeClick}
        />
        <img
          src={dislike}
          alt="logo"
          className={`no ${isDislikeActive ? 'active' : ''}`}
          onClick={handleDislikeClick}
        />
        <img
          src={dislikeclick}
          alt="logo"
          className={`click ${isDislikeActive ? 'active' : ''}`}
          onClick={handleDislikeClick}
        />
      </div>
    </div>
  );
}
