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
                <h1>Whats up C-SCHWAB!!</h1>
            </body>
        </div>
        <p className="App-intro">
            Check out my new resume site im working on! I just got it public facing!!
        </p>
          <img
              src="https://s-media-cache-ak0.pinimg.com/originals/ce/f1/73/cef173f99e514a78eae54418c2086f40.jpg"
              className="cow"
          />
      </div>
    );
  }
}

export default AppHeader;
