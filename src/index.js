import React from 'react';
import ReactDOM from 'react-dom/client';
import { StateContext } from './context/StateContext'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateContext>
    <Router>
      <App />
    </Router>
  </StateContext>
);