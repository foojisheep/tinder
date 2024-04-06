import { useState } from 'react';
import './App.css';
import Login from './components/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  
  return (
    <div className="App">
        <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default App;
