import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const jsonData = require('./database.json');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App jsonObj={jsonData} />, div);
});
