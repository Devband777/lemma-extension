import React, { useState } from 'react';
import './style.scss';
import Summarize from '../Summarize';
import InputAnswer from '../InputAnswer';
import Timeline from '../Timeline';
import Transcribe from '../Transcribe';
export default function Home(props) {
  return (
    <div className="home">
      <InputAnswer inputSentence={props.inputValue} />
      <Summarize />
      <Timeline />
      <Transcribe />
    </div>
  );
}
