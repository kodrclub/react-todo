import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

/////////////////////////mirage start
import { makeServer } from './server';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}
if (process.env.NODE_ENV === 'production') {
  makeServer({ environment: 'development' }); //because we want load seeds and simulate network latency even in production
}
/////////////////////////mirage end

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
