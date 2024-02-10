import React from 'react';
import Import from './components/Import';
import './components/style.css'

import  Router2  from './router/Router'
import {BrowserRouter as Router ,Route , Switch, Routes} from 'react-router-dom';
import Middle from './components/Middle';
function App() {
  return (
    <>
      <React.StrictMode>
        <Router2/>

      </React.StrictMode>
    </>
  );
}

export default App;