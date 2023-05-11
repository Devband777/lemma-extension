import React, { useState } from 'react';
import './style.scss';
import TextTitle from '../TextTitle';
import logo from '../../assets/img/icon-34.png';
import dropdown from '../../assets/img/dropdownarrow.png';
export default function InputAnswer(props) {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="inputanswer">
      <div className="inputanswer-userprompt">
        <div className="inputanswer-userprompt-title">
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
        {props.inputSentence}
      </div>
      <div className={`inputanswer-text ${isExpanded ? 'hidden' : ''}`}>
        <TextTitle />
        <div className="inputanswer-text-introduction">
          /Summarize from 00:00 to 00:00
        </div>
        <div className="inputanswer-text-partial">
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
