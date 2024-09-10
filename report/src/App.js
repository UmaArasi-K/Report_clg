import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // On successful login, set the authenticated state
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Conditionally render routes based on authentication */}
        <Route path="/" element={isAuthenticated ? <Home /> : <Login isAuthenticated={isAuthenticated} onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return <h1>Welcome to the Home Page!</h1>;
};

export default App;
