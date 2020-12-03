import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './style.css'
import App from './App';
import Application from './components/Application'
import Forms from './components/Forms'
import reportWebVitals from './reportWebVitals';
import MyInfo from "./components/MyInfo"
import Formpractise from './components/Formpractise';


ReactDOM.render(
  <App/>,
  // <Application/>,
    // <Forms/>,
    // <Formpractise/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
