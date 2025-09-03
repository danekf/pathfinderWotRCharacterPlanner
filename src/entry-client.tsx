//hydrates the server html on the client

//library imports
import ReactDom from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//app level imports
import { Router } from './components/router/router';
import "./index.css";

ReactDom.hydrateRoot(
  document.getElementById("root") as HTMLElement, 
  <React.StrictMode>
    <BrowserRouter>
      <Router />    
    </BrowserRouter>
  </React.StrictMode>
);

