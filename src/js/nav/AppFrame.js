import React from 'react';

// Source Code
import SiteBar from './SiteBar';
import SiteDrawer from './SiteDrawer';

class AppFrame extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.selectTab = this.selectTab.bind(this);
        this.tabs = this.props.tabs;

        this.state = {
            drawerOpen: false,
            selectedContent: this.props.tabs ? this.props.tabs[0].content : null,
        };
    }

    toggleDrawer() {
        this.setState((prevState) => ({drawerOpen: !prevState.drawerOpen}));
    }

    closeDrawer() {
        this.setState({drawerOpen: false});
    }

    selectTab(index) {
        this.setState({selectedContent: this.tabs[index].content})
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

                <div style={{
                    margin: '48px 72px',
                }}>
                    <SiteContent
                        content={this.state.selectedContent}
                    />
                </div>
            </div>
        );
    }
}

function SiteContent(props) {
    return (props.content);
}

module.exports = AppFrame;