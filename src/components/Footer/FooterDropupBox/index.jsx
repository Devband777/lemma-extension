import React from 'react';
import './style.scss';
import logo from '../../../assets/img/single.png';
import clock from '../../../assets/img/clock.png';
import gear from '../../../assets/img/gear.png';
import { Link } from 'route-lite';
import Home from '../../Home';
import SignUp from '../../SignUp';
import ChangeAvatar from '../../ChangeAvatar';
import DropupBoxItem from './DropupBoxItem';
export default function FooterDropupBox(props) {
  const handleClick = () => {
    props.callback('change');
  };
  const otherClick = () => {
    props.callback('');
  };
  const frequencyitems = [
    {
      id: 1,
      url: '/summarize',
      hoverstatus: 'true',
      description: 'Summarizes video from inputted start to end time',
    },
    {
      id: 2,
      url: '/show timeline',
      description: 'Shows AI generated video chapters',
    },
    {
      id: 3,
      url: '/transcribe',
      hoverstatus: 'true',
      status: 'true',
      description:
        'Transcribes video in text format from inputted start to end time',
    },
    {
      id: 4,
      url: '/collapse prompts',
      description: 'Collapses all user prompts in chat ',
    },
  ];
  const profileitems = [
    {
      id: 1,
      url: '/change avatar',
      description: 'Upload photo to change avatar',
    },
    {
      id: 2,
      url: '/logout',
      description: 'Logs out of session',
    },
  ];
  return (
    <div className="footerdropupbox">
      <div className="footerdropupbox-frequencyaction">
        <div className="footerdropupbox-frequencyaction-title">
          <img
            src={logo}
            alt="logo"
            className="footerdropupbox-frequencyaction-title-icon"
          />
          <div className="footerdropupbox-frequencyaction-title-row">
            FREQUENT ACTIONS
            <img src={clock} alt="clock" />
          </div>
        </div>
        <div className="footerdropupbox-frequencyaction-container">
          <Link
            component={() => <Home clickitem="summarize" />}
            onClick={otherClick}
          >
            <DropupBoxItem
              url={frequencyitems[0].url}
              hoverstatus={frequencyitems[0].hoverstatus}
              status={frequencyitems[0].status}
              description={frequencyitems[0].description}
            />
          </Link>
          <Link
            component={() => <Home clickitem="timeline" />}
            onClick={otherClick}
          >
            <DropupBoxItem
              url={frequencyitems[1].url}
              description={frequencyitems[1].description}
            />
          </Link>
          <Link
            component={() => <Home clickitem="transcribe" />}
            onClick={otherClick}
          >
            <DropupBoxItem
              url={frequencyitems[2].url}
              hoverstatus={frequencyitems[2].hoverstatus}
              status={frequencyitems[2].status}
              description={frequencyitems[2].description}
            />
          </Link>
          <Link component={Home} onClick={otherClick}>
            <DropupBoxItem
              url={frequencyitems[3].url}
              hoverstatus={frequencyitems[3].hoverstatus}
              status={frequencyitems[3].status}
              description={frequencyitems[3].description}
            />
          </Link>
        </div>
      </div>
      <div className="footerdropupbox-devider" />
      <div className="footerdropupbox-profilesetting">
        <div className="footerdropupbox-profilesetting-title">
          <img
            url="https://zpl.io/GEBoYWd"
            alt="logo"
            className="footerdropupbox-profilesetting-title-icon"
          />
          <div className="footerdropupbox-profilesetting-title-row">
            PROFILE SETTINGS
            <img src={gear} alt="gear" />
          </div>
        </div>
        <div className="footerdropupbox-frequencyaction-container">
          <Link component={ChangeAvatar} onClick={handleClick}>
            <DropupBoxItem
              url={profileitems[0].url}
              description={profileitems[0].description}
            />
          </Link>
          <Link component={SignUp}>
            <DropupBoxItem
              url={profileitems[1].url}
              description={profileitems[1].description}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
