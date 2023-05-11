import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import Container from './Container';
import Protip from '../Protip';
import logo1 from '../../assets/img/skipimage.png';
import logo2 from '../../assets/img/introimage1.png';
import logo3 from '../../assets/img/introimage2.png';
import logo4 from '../../assets/img/introimage3.png';
import { Link } from 'route-lite';
import './style.scss';
export default function Landing(props) {
  props.callback('Landing');
  const [count, setCount] = useState(0);
  const [mousedOver, setMousedOver] = useState(false);

  const containers = [
    {
      title: 'Generate a timeline',
      description:
        'Automatically create a timeline with key points of information.',
      name: 'Image 1',
      source: logo2,
      type: '1',
    },
    {
      title: 'Summarize',
      description:
        'In a hurry? Summarize only what you want or the whole video. ',
      name: 'Image 2',
      source: logo3,
      type: '2',
    },
    {
      title: 'Ask a question',
      description:
        'Engage with your video content in a more interactive and immersive way.',
      name: 'Image 3',
      source: logo4,
      type: '3',
    },
  ];
  useEffect(() => {
    if (mousedOver) {
      const timer = setInterval(() => {
        setCount((prevCount) => (prevCount + 1) % containers.length);
      }, 2000);
      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [mousedOver]);
  return (
    <div className="landing">
      <div className="landing-description">
        Explore new learning possibilities with Lemma.
      </div>
      <div
        className="landing-container"
        onMouseOver={() => setMousedOver(true)}
        onMouseOut={() => setMousedOver(false)}
      >
        <Container
          title={containers[count].title}
          description={containers[count].description}
          name={containers[count].name}
          source={containers[count].source}
          type={containers[count].type}
        />
      </div>
      <div className="landing-footer">
        <Slider type={containers[count].type} />
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
