import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import MyBox from "./components/mui/box";
import Fetcher from "./components/fetch/fetcher";

ReactDOM.render(
  <Fetcher />
  ,
  document.getElementById('root')
);

// ASSIGNMENTS
//1. Create 2 components. 1 should be default and 1 should not be. Render both on the screen at the same time.
//x. pagination in fetch user API. user should be able to click on next or prev button to fetch users of that page. 
reportWebVitals();
