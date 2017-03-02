import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppHeader from './App';
import './index.css';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AppHeader />
    </MuiThemeProvider>,

    document.getElementById('root')
);