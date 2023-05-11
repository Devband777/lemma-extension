import React from 'react';
import { Link } from 'route-lite';
import Landing from '../Landing';
import LanguageDropdown from './LanguageDropdown';
import FontDropdown from './FontDropdown';
import logo from '../../assets/img/icon-34.png';
import './style.scss';

export default function Header() {
  return (
    <div className="header">
      <Link component={Landing}>
        <div className="header-container">
          <div className="header-container-logo">
            <img src={logo} alt="logo" />
          </div>
          <p>LEMMA</p>
        </div>
      </Link>
      <div className="header-dropdowngroup">
        <div className="header-dropdowngroup-left">
          <LanguageDropdown />
        </div>
        <div className="header-dropdowngroup-right">
          <FontDropdown />
        </div>
      </div>
    </div>
  );
}
