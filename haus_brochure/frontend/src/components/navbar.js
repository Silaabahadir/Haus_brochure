import React from 'react';
import '../App.css';

const MyNavbar = () => {
  return (
    <div className="navbar-custom">
      <div className="logo">
          <img src="./indir.jpg" alt="logo" />
        </div>
      <div className="navbar-links">
        <a className="nav-link" href="#home">Ürünler</a>
        <a className="nav-link" href="#link">Uygulamalar</a>
        <div className="nav-dropdown">
          <a className="nav-link" href="#satış">Satış Sonrası</a>
          <div className="nav-dropdown-content">
            <a href="#action/3.1">Action</a>
            <a href="#action/3.2">Another action</a>
            <a href="#action/3.3">Something</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
