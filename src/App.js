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
                <img style={{height: "80px"}}
                    src="http://45.media.tumblr.com/a631c73aedc13c5a40c76d033b2361ba/tumblr_nxx72tylTt1ukx2eco1_1280.gif"
                />
            </body>
        </div>
          <h1>Hope your having a merry christmas!!!!</h1>
          <h2>(and are laughing and drinking with your family!!) </h2>
          <h3>Heres a great meme. Why? Just because. </h3>
          <img style={{width: "100%"}}
              src="http://www.ldssmile.com/wp-content/uploads/2013/11/5_4217171.jpg"
          />
      </div>
    );
  }
}

export default AppHeader;
