import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Page
import Main from './pages/Main';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Analysis from './pages/Analysis';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      {/* Index */}
      <Route path="/" element={<Home />} />

      {/* Main */}
      <Route path="main" element={<Main />} />

      {/* User */}
      <Route path="user">
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      {/* Img */}
      <Route path="img">
        <Route path="analysis" element={<Analysis />} />
      </Route>
    </Routes>
  );
}

export default App;
