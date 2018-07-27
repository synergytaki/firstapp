import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

class App extends Component {
  render() {
    const p = {value:'20180727'};

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">初めてのReact</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <Hello props={p} />
      </div>
    );
  }
}

export default App;
