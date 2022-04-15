import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import ConditionalRendering from "./components/recap/conditionalRendering";
import Calculator from "./components/mapreduce/calculator";

ReactDOM.render(
  <Calculator />
  ,
  document.getElementById('root')
);

// ASSIGNMENTS
//1. Create 2 components. 1 should be default and 1 should not be. Render both on the screen at the same time.
//x. pagination in fetch user API. user should be able to click on next or prev button to fetch users of that page. 
reportWebVitals();
