import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import { AppProvider } from './reducers/AppContext'; //Composant de notre Context(AppContext) qui englobera toute notre app
import Profile from './pages/Profile';
import CoverPage from './pages/CoverPage';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<CoverPage />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/about' element={<About title={'About us'} />}></Route>
          <Route exact path='/my-profile' element={<Profile title={'My Profile'} />}></Route>
          <Route exact path='*' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;