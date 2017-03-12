import React from 'react';

// Source Code
import SiteBar from './nav/SiteBar';
import SiteDrawer from './nav/SiteDrawer';
import Resume from './resume/Resume';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.selectTab = this.selectTab.bind(this);

        this.tabs = [
            {
                title: 'Resume',
                content: <Resume />
            },{
                title: 'Portfolio',
                content: <div>Portfolio</div>
            },

            {
                title: 'About This Site',
                content: <div>About This Site</div>
            },
        ];

        this.state = {
            drawerOpen: false,
            selectedContent: this.tabs[0].content,
        };
    }

    toggleDrawer() {
        this.setState((prevState) => ({drawerOpen: !prevState.drawerOpen}));
    }

    closeDrawer() {
        this.setState({drawerOpen: false});
    }

    selectTab(index) {
        console.log('selectTab', index);
        this.setState({selectedContent:this.tabs[index].content})
    }

    render() {
        return (
            <div>
                <SiteBar
                    toggleDrawer={this.toggleDrawer}
                />
                <SiteDrawer
                    drawerOpen={this.state.drawerOpen}
                    toggleDrawer={this.toggleDrawer}
                    closeDrawer={this.closeDrawer}
                    selectTab={this.selectTab}
                    tabs={this.tabs}
                />

                <SiteContent
                    content={this.state.selectedContent}
                />
            </div>
        );
    }
}

function SiteContent(props) {
    return(props.content);
}

module.exports = App;