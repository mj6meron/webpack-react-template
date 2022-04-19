import React from "react"; 
import ReactDOM from "react-dom"; 
 
function Welcome(props) { 
  return (<h1>Hello, {props.name}</h1>)
} 
 
const element = <Welcome name="Meron" />; 
 
ReactDOM.render(element, document.getElementById("index")); 



/*
npm i -D @babel/core @babel/present-env @babel/preset-react babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server
*/