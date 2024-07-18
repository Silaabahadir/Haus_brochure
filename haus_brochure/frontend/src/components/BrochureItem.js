import React from 'react';

const BrochureItem = ({ title }) => {
  return (
    <div className="brochure-item">
      <h3 className="brochure-title">{title}</h3>
      <button className="download-button">İndir</button>
    </div>
  );
};

export default BrochureItem;
