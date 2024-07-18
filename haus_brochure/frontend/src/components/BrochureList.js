import React from 'react';
import BrochureItem from './BrochureItem';

const brochures = [
  "Çevre Uygulamaları E Serisi Broşürü",
  "Gıda Uygulamaları F Serisi Broşürü",
  "Endüstri Uygulamaları I Serisi Broşürü",
  "HAUS Dekantörler",
  "HAUS Süt Sepratörleri",
  "Olive Plus 33 Broşürü",
  "Olive Plus 52 Broşürü",
  "Olive Plus 53 Broşürü",
  "Olive Plus 55 Broşürü",
  "Olive Plus 64 Broşürü",
  "Olive Pro 21 Broşürü",
  "Olive Pro 31 Broşürü",
  "HAUS Turbo Blower Broşürü",
  "HAUS Vidalı Pres Broşürü",
  "HAUS Separatörler",
  
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
