import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from "./components/about";
import { Route, BrowserRouter, Routes } from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<App/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/Home" element={<App/>}/>
   </Routes>  
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
