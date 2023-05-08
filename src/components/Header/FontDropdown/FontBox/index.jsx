import React from 'react';
import FontOne from './FontOne';
import './style.scss';
export default function FontBox() {
  return (
    <div className="fontbox">
      <FontOne fontkey="Regular" />
      <FontOne fontkey="Large" />
      <FontOne fontkey="Larger" />
    </div>
  );
}
