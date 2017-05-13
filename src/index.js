import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import jsonData from './database.json';

ReactDOM.render(
  <App dataStore={jsonData} />,
  document.getElementById('root')
);
