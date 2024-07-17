import React from 'react';
import BrochureItem from './BrochureItem';

const brochures = [
  "Çevre Uygulamaları E Serisi Broşürü",
  "Gıda Uygulamaları F Serisi Broşürü",
  "Endüstri Uygulamaları I Serisi Broşürü",
  // Diğer broşürler...
];

const BrochureList = () => {
  return (
    <div className="brochure-list">
      {brochures.map((title, index) => (
        <BrochureItem key={index} title={title} />
      ))}
    </div>
  );
};

export default BrochureList;
