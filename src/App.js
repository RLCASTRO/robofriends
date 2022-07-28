//The imports MUST be at the top of the page
import React, {Component} from 'react'; //making the destructuring 
import logo from './logo.svg';
import './App.css';
// import React from 'react'; //comment this for now

//converted into a class
// class App extends React.Component {
class App extends Component { //same as the line 8, but using the destructuring

  render() { //render is inside the React.component
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-Title">Welcome to React</h1>
        </header>
          <p className="App-intro">
            to get started, edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
    
  }
}

export default App;
