import React, { useContext } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import './App.css';

//import the different pages from the pages folder
//add your own pages here
import { Home } from './Pages/';
import { store } from './Store';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
