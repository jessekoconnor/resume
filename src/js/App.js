import React from 'react';

// Source Code
import Resume from './resume/Page';
import AppFrame from './nav/AppFrame';
import AboutThisSite from './AboutThisSite/Page';
import Portfolio from './Portfolio/Page';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.tabs = [
            {
                tabTitle: 'Resume',
                content: <Resume />
            },
            {
                tabTitle: 'Portfolio',
                content: <Portfolio />
            },
            {
                tabTitle: 'About This Site',
                content: <AboutThisSite />
            },
        ];
    }

    render() {
        return (
            <div>
                <AppFrame tabs={this.tabs} />
            </div>
        );
    }
}

module.exports = App;