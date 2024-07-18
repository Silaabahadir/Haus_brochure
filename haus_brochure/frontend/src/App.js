import React from 'react';
import MyNavbar from './components/navbar';
import BrochureList from './components/BrochureList';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <main>
        <BrochureList />
      </main>
      <footer className="text-center py-3">
        #BECAUSEWECARE
      </footer>
    </div>
  );
};

export default App;
