/** @jsxRuntime classic /
/* @jsx jsx */
import { Global, jsx, css } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start({ quiet: true})
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global
        styles={css`
        body {
          margin: 0;
        }
      `}
      />
      <Global
        styles={css`
        * {
          margin: 0;
          font-family: 'Cairo'
        }
      `}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

