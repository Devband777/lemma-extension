import React from 'react';
import Slider from './Slider';
import Container from './Container';
import Protip from '../Protip';
import logo1 from '../../assets/img/skipimage.png';
import { Link } from 'route-lite';
import './style.scss';
export default function Landing(props) {
  props.callback('Landing');
  return (
    <div className="landing">
      <div className="landing-description">
        Explore new learning possibilities with Lemma.
      </div>
      <div className="landing-container">
        <Container />
        <Container />
        <Container />
      </div>
      <div className="landing-footer">
        <Slider />
        <Slider />
        <Slider />
      </div>
      <Link component={Protip}>
        <div className="landing-skipbutton">
          <div className="landing-skipbutton-text">Skip</div>
          <div className="landing-skipbutton-arrow">
            <img src={logo1} alt="logo" />
          </div>
        </div>
      </Link>
    </div>
  );
}
