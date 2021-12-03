import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Hello,Hello1} from './react1';
import Name from './components/Exp';
import Truck from './components/Classtruck';
import Header from './components/render';
import Clickevent from './onlinesample/sample';
import Myform from'./components/Myform';
import Dropdown from'./components/Dropdown';
import Sample from './onlinesample/sample';

// import Props from './components/props';
import FavoriteColor from './components/FavoriteColor';
// import Useeffecttimer from './components/Useeffecttimer';
// import Component1 from './components/Component1';

// import Formadd from './task/Formadd';

import AppList from './task/AppList';

ReactDOM.render(
  <React.StrictMode>
    <App></App>

    {/* <Component1></Component1> */}
    {/* <Formadd></Formadd> */}
    <AppList></AppList>
    {/* <One></One> */}
    {/* <Name value="Chandra" /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

