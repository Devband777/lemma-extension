import React, { useState } from 'react';
import './style.scss';
import TextTitle from '../TextTitle';
import logo from '../../assets/img/icon-34.png';
import dropdown from '../../assets/img/direction_angle down.svg';
export default function Summarize(props) {
  const [isSummarizeExpand, setIsSummarizeExpand] = useState(
    props.clickitem === 'summarize'
  );
  const handleClick = () => {
    setIsSummarizeExpand(!isSummarizeExpand);
  };
  return (
    <div className="summarize">
      <div className="summarize-userprompt">
        <div className="summarize-userprompt-title">
          PROMPT
          <div>
            <img
              src={dropdown}
              alt="logo"
              className={`dropdownimg ${isSummarizeExpand ? 'hidden' : ''}`}
              onClick={handleClick}
            />
            <img src={logo} alt="logo" className="avatarimg" />
          </div>
        </div>
        /Summarize from 00:00 to 00:00
      </div>
      <div className={`summarize-text ${isSummarizeExpand ? 'hidden' : ''}`}>
        <TextTitle />
        <div className="summarize-text-introduction">
          /Summarize from 00:00 to 00:00
        </div>
        <div className="summarize-text-partial">
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
