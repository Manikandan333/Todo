import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import AppList from './task/AppList';

ReactDOM.render(
  <React.StrictMode>
    <App></App>

    <AppList></AppList>
  
  </React.StrictMode>,
  document.getElementById('root')
);

