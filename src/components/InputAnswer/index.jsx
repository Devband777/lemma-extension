import React, { useState } from 'react';
import './style.scss';
import TextTitle from '../TextTitle';
import logo from '../../assets/img/icon-34.png';
import dropdown from '../../assets/img/dropdownarrow.png';
export default function InputAnswer(props) {
  const [isInputAnswerExpand, setIsInputAnswerExpand] = useState(false);
  const handleClick = () => {
    setIsInputAnswerExpand(!isInputAnswerExpand);
  };
  return (
    <div className={`inputanswer ${props.inputSentence === '' ? 'show' : ''}`}>
      <div className="inputanswer-userprompt">
        <div className="inputanswer-userprompt-title">
          PROMPT
          <div>
            <img
              src={dropdown}
              alt="logo"
              className={`dropdownimg ${isInputAnswerExpand ? 'hidden' : ''}`}
              onClick={handleClick}
            />
            <img src={logo} alt="logo" className="avatarimg" />
          </div>
        </div>
        <div className="inputanswer-userprompt-body">{props.inputSentence}</div>
      </div>
      <div
        className={`inputanswer-text ${isInputAnswerExpand ? 'hidden' : ''}`}
      >
        <TextTitle />
        <div className="inputanswer-text-userprofile">
          <div className="inputanswer-text-userprofile-avatar">
            <img src={logo} alt="logo" />
          </div>
          <div className="inputanswer-text-userprofile-container">
            <div className="inputanswer-text-userprofile-container-name">
              Name
            </div>
            <div className="inputanswer-text-userprofile-container-body">
              <span>MM/DD/YY</span>
              <span>-</span>
              <span>MM/DD/YY</span>
            </div>
            <div className="inputanswer-text-userprofile-container-link">
              Source text
            </div>
          </div>
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
