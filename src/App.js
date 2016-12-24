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
                <h1>Jesse O'Connor</h1>
            </body>
        </div>
        <p className="App-intro">
            Code quality and and a cool culture is my dream company.
            Yes.
        </p>
      </div>
    );
  }
}

export default AppHeader;
