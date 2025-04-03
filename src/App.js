import React, { useEffect } from 'react';
import './App.css';
import './animations.css';
import Home from './pages/Home/Home';
import observeElements from './utils/animationObserver';

function App() {
  useEffect(() => {
    // Iniciar observer para animaciones al hacer scroll
    observeElements();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
