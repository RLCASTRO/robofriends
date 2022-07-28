//The imports MUST be at the top of the page
import React from 'react'; //imports react that does the DOM manipulation for us
import ReactDOM from 'react-dom/client'; //connects react 
import './index.css'; //this stylesheet will only work with this index.js, if you import the css, it will apply
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; //import here, but i'm using at Hello.js

//this is selecting the DOM object named 'root' and storing into a root const
//createRoot is a ReactDom method
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <h1>Hello World</h1> */}
    <Card />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
