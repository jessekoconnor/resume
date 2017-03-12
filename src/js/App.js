import React from 'react';

// Source Code
import Resume from './resume/Resume';
import AppFrame from './nav/AppFrame';

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
                content: <div>Portfolio</div>
            },
            {
                tabTitle: 'About This Site',
                content: <div>About This Site</div>
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