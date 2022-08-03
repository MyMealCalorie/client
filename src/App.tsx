import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Page
import Main from './pages/Main';
import LogIn from './pages/LogIn';
import LogOut from './pages/LogOut';
import Analysis from './pages/Analysis';

function App() {
  return (
    <Routes>
      
      {/* Main */}
      <Route path='/' element={<Main />} />

      {/* User */}
      <Route path='user'>
        <Route path='login' element={ <LogIn /> }/>
        <Route path='logout' element={ <LogOut /> }/>
      </Route>
      
      {/* Img */}
      <Route path='img'>
        <Route path='analysis' element={ <Analysis /> }/>
      </Route>

    </Routes>
  );
}

export default App;
