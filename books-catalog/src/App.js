import React from 'react';
import Import from './components/Import';
import './components/style.css'

import  Router2  from './router/Router'
import {BrowserRouter as Router ,Route , Switch, Routes} from 'react-router-dom';
import Middle from './components/Middle';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/header/header';
function App() {
  return (
    <>
    <Provider store={store}>
      <React.StrictMode>
      <Header/>
        <Router2/>
       
      </React.StrictMode>
      </Provider>
    </>
  );
}

export default App;