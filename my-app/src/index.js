import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppError } from './components/AppError';

ReactDOM.render(
  <React.StrictMode>
    <AppError>
      <App />
    </AppError>
  </React.StrictMode>,
  document.getElementById('root')
);
