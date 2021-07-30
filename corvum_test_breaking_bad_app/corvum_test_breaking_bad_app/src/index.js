/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// import App.js to use within index!
import App from './App';

// Stylesheet
import "./scss/styles.scss";

//--------------------------------------------------------------
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

