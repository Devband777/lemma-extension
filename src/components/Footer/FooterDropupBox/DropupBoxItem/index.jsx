import React from 'react';
import './style.scss';
export default function DropupBoxItem({
  url,
  hoverstatus,
  status,
  description,
}) {
  let className = 'dropupboxitem-title-description';
  let className1 = 'dropupboxitem-title-hovertext';
  if (status) className += ' option-show';
  if (hoverstatus) className1 += ' status-show';
  return (
    <div className="dropupboxitem">
      <div className="dropupboxitem-title">
        {url}
        <div className={className1}>
          from <span>00:00</span> to <span>00:00</span>
        </div>
        <div className={className}>+ 1 option</div>
      </div>
      {description}
    </div>
  );
}
