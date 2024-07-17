import React from 'react';
import Navbar from './components/navbar';
import BrochureList from './components/BrochureList';
import './App.css'; // Genel stil dosyası

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <BrochureList />
      </main>
      <footer>
        #BECAUSEWECARE
      </footer>
    </div>
  );
};

export default App;
