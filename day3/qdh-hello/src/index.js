import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import QdhApp from './QdhApp';
import reportWebVitals from './reportWebVitals';

const QdhRoot = ReactDOM.createRoot(document.getElementById('QdhRoot'));
QdhRoot.render(
  <React.StrictMode>
    <QdhApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
