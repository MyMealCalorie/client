import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Page
import Main from './pages/Main';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Analysis from './pages/Analysis';

function App() {
  return (
    <Routes>
      
      {/* Main */}
      <Route path='/' element={<Main />} />

      {/* User */}
      <Route path='user'>
        <Route path='login' element={ <LogIn /> }/>
        <Route path='signup' element={ <SignUp /> }/>
      </Route>
      
      {/* Img */}
      <Route path='img'>
        <Route path='analysis' element={ <Analysis /> }/>
      </Route>

    </Routes>
  );
}

export default App;
