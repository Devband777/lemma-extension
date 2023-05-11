import React from 'react';
import Partial from '../../Partial';
import logo from '../../../assets/img/icon-34.png';
import './style.scss';
export default function Container(props) {
  return (
    <div className="container">
      <div className="container-header">
        <div className="container-header-title">{props.title} </div>
        <div className="container-header-description">{props.description}</div>
      </div>
      <div className="container-image">
        <img src={props.source} alt={props.name} />
      </div>
      <div className="container-wrapper">
        <div
          className={`container-wrapper-one ${
            props.type === '1' ? 'hidden' : ''
          }`}
        >
          <Partial />
          <Partial />
          <Partial />
          <div className="container-wrapper-one-timeline" />
        </div>
        <div
          className={`container-wrapper-two ${
            props.type === '2' ? 'hidden' : ''
          }`}
        >
          <div className="container-wrapper-two-introduction">
            Summarize from 00:00 to 01:20
          </div>
          <div className="container-wrapper-two-partial">
            <span>Socrates (469/470 BCE - 399 BCE)</span> was a classical Greek
            philosopher who is credited as one of the founders of Western
            philosophy. He is best known for his method of questioning, called
            the Socratic method, which involved asking a series of questions to
            stimulate critical thinking and expose the contradictions in
            someone's beliefs. Socrates was highly critical of the Athenian
            democracy and was sentenced to death by drinking hemlock for
            allegedly corrupting the youth and impiety.
          </div>
        </div>
        <div
          className={`container-wrapper-three ${
            props.type === '3' ? 'hidden' : ''
          }`}
        >
          <div className="container-wrapper-three-title">
            PROMPT
            <div>
              <img src={logo} alt="logo" className="avatarimg" />
            </div>
          </div>
          Who were the other philosophers mentioned in this video?
        </div>
      </div>
    </div>
  );
}
