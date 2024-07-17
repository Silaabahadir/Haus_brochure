import React from 'react';

const BrochureItem = ({ title }) => {
  return (
    <div className="brochure-item">
      <div className="brochure-title">{title}</div>
      <button className="download-button">İndir</button>
    </div>
  );
};

export default BrochureItem;
