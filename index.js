import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';

import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <>
  <BrowserRouter>
    {/* <App /> */}
    <Home/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


