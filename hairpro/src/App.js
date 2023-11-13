import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import { AppProvider } from './reducers/AppContext'; //Composant de notre Context(AppContext) qui englobera toute notre app

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='*' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;