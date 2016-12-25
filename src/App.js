import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class AppHeader extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <head>
                <title>Resume Site</title>
            </head>
            <body>
                <h1>Whats up VICTORIA!!</h1>
            </body>
        </div>
          <h1>I hope your having a merry christmas!</h1>
          <h2>(and are laughing and drinking with your family right now!) </h2>
          <h3>Heres a great meme for your day: </h3>
          <img
              src="http://www.ldssmile.com/wp-content/uploads/2013/11/5_4217171.jpg"
          />
      </div>
    );
  }
}

export default AppHeader;
