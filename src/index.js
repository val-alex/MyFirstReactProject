import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
require('./styles/normalize.css');
require('./styles/typebase.css');
require('./styles/main.css');

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
