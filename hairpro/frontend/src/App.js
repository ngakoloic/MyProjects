import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import { AppProvider } from './reducers/AppContext'; //Composant de notre Context(AppContext) qui englobera toute notre app
import Profile from './pages/MySpace';
import CoverPage from './pages/CoverPage';
import CreateBusiness from './pages/CreateBusiness';
import Manage from './pages/Manage';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path='/' element={<CoverPage />}></Route> */}
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/:id' element={<Home />}></Route>
          <Route exact path='/create-my-business' element={<CreateBusiness title={'Business checkout'} />}></Route>
          <Route exact path='/about' element={<About title={'About us'} />}></Route>
          <Route exact path='/my-space' element={<Profile title={'My Space'} />}></Route>
          <Route exact path='/dashboard' element={<Manage title={'Dashboard'} />}></Route>
          <Route exact path='*' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;