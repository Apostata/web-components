import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React!</h1>
        <rs-stock-finder></rs-stock-finder>
        <rs-stock-price stock-symbol="AAPL"></rs-stock-price>
      </div>
    );
  }
}

export default App;
