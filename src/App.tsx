import React, { useContext } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ReactGA from 'react-ga4';

import './App.css';

//import the different pages from the pages folder
//add your own pages here
import { Home } from './Pages/';
import { store } from './Store';

ReactGA.initialize([
  {
    trackingId: 'G-T26WV973PB',
  },
]);

ReactGA.send('pageview');

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
