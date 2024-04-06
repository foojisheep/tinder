import { useState } from 'react';
import './App.css';
import SwipeFeature from './components/SwipeFeature';
import Login from './components/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
        {isLoggedIn ? (
          <SwipeFeature onLogout={handleLogout} /> 
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
    </div>
  );
};

export default App;
