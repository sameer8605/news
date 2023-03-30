import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './Page';
const Demo =  React.lazy(()=> import('./Demo'));
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path= '/' Component={Demo}></Route>
        <Route path = "/page/:userId" Component={Page} ></Route>
        
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
