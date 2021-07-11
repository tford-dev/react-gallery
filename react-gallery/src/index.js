import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Paths from "./Components/Paths";
import reportWebVitals from './reportWebVitals';

//I chose the paths component to render as it holds the routes for each component of this project
ReactDOM.render(
  <React.StrictMode>
    <Paths />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
