import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import loadInitialTopics from './database';

ReactDOM.render(
  <App topics={loadInitialTopics()} />,
  document.getElementById('root')
);
