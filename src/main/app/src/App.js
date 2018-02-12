import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'request'


class App extends Component {

//var request = require('request');
//request('http://www.google.com', function (error, response, body) {
//  console.log('error:', error); // Print the error if one occurred
//  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//  console.log('body:', body); // Print the HTML for the Google homepage.
//});

componentDidMount() {
    request('http://localhost:8080/test', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get KDKDKD, edit <code>src/App.js</code>jj
        </p>
      </div>
    );
  }
}

export default App;
