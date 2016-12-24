import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppHeader from './App';
import './index.css';

ReactDOM.render(
    <MuiThemeProvider>
        <AppHeader />
    </MuiThemeProvider>,

document.getElementById('root')
);
