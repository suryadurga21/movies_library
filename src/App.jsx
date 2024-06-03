import React, { useEffect } from 'react';
import Home from './Pages/Home/Home';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const App = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       console.log('Logged In');
  //       navigate('/'); // Redirect to home if logged in
  //     } else {
  //       console.log('Logged Out');
  //       navigate('/login'); // Redirect to login if logged out
  //     }
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/player/:id' element={<Player />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;