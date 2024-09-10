import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Student from './Pages/Student';

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
        <Route path="/" element={isAuthenticated ? <Student /> : <Login isAuthenticated={isAuthenticated} onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}


export default App;
