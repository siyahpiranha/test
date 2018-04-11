import React, { Component } from 'react';
import logo from './logo.svg';
import {Product} from './Product'
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this._products= [
            {title: 'Metal Char', description: 'My favorite chair'},
            {description: 'My lovely chair'},
            {}
        ];

    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React in Bonn</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {this._products.map(function(p,i) {return <Product title={p.title} description={p.description} nr={i}/>})}
      </div>
    );
  }
}

export default App;
