import { useState } from 'react';
import './App.css';
import SwipeFeature from './components/SwipeFeature';
import Login from './components/Login';
import { SessionProvider } from './components/SessionContext';

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
      <SessionProvider>
        {isLoggedIn ? (
          <SwipeFeature onLogout={handleLogout} /> 
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </SessionProvider>
    </div>
  );
};

export default App;
