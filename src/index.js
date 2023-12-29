import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Layout/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <App />
  </>
);
