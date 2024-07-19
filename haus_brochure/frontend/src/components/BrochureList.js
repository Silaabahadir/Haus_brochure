import React, { useState } from 'react';
import BrochureItem from './BrochureItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../App.css'; // App.css dosyasını import edin

const brochures = {
  tr: [
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
  ],
  en: [
    "Environment Applications · E Series",
    "Food Applications · F Series",
    "Industrial Applications · I Series",
    "HAUS Decanters",
    "HAUS Dairy Separators",
    "HAUS Turbo Blower",
    "HAUS Screw Press",
    "HAUS Separators",
  ],
};

const BrochureList = () => {
  const [selectedCategory, setSelectedCategory] = useState('ürün');
  const [selectedLanguage, setSelectedLanguage] = useState('tr');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredBrochures = brochures[selectedLanguage].filter(brochure => {
    if (selectedCategory === 'ürün') {
      return brochure.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  return (
    <div className="brochure-list-container">
      <div className="filter-menu">
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="ürün">ÜRÜN</option>
          <option value="seri">SERİ</option>
          <option value="uygulama">UYGULAMA</option>
        </select>
        <select onChange={handleLanguageChange} value={selectedLanguage}>
          <option value="tr">TR</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="ru">RU</option>
          <option value="it">IT</option>
          <option value="fr">FR</option>
        </select>
        <input
          type="text"
          placeholder="Ara..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="brochure-list">
        {filteredBrochures.map((title, index) => (
          <BrochureItem key={index} title={title} />
        ))}
      </div>
      <div className="social-icons text-center mt-3">
        <a href="https://facebook.com" className="mr-2"><FontAwesomeIcon icon={faFacebookF} size="2x" /></a>
        <a href="https://instagram.com" className="mr-2"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        <a href="https://twitter.com" className="mr-2"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
      </div>
    </div>
  );
};

export default BrochureList;
