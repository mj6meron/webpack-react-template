import React from "react";
import {StrictMode} from 'react'; 
import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client'; 
import App from './components/App'
import './global.css'

const rootElement = document.getElementById('index');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/*
npm i -D @babel/core @babel/present-env @babel/preset-react babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server npm i -D @babel/core @babel/present-env @babel/preset-react babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server mini-css-extract-plugin
*/
