import React, { useState } from 'react';
import './style.scss';
import Summarize from '../Summarize';
import InputAnswer from '../InputAnswer';
import Timeline from '../Timeline';
import Transcribe from '../Transcribe';
export default function Home(props) {
  return (
    <div className="home">
      <div className="home-subtitle">
        <InputAnswer
          inputSentence={props.inputValue}
          clickitem={props.clickitem}
        />
      </div>
      <div className="home-subtitle">
        <Summarize clickitem={props.clickitem} />
      </div>
      <div className="home-subtitle">
        <Timeline clickitem={props.clickitem} />
      </div>
      <div className="home-subtitle">
        <Transcribe clickitem={props.clickitem} />
      </div>
    </div>
  );
}
