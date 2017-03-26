import React from "react";
// Source Code
import SiteBar from "./SiteBar";
import SiteDrawer from "./SiteDrawer";
import Title from 'react-title-component';

let ReactGA = require('react-ga');
ReactGA.initialize('UA-93732020-1');

class AppFrame extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.selectTab = this.selectTab.bind(this);
        this.tabs = this.props.tabs;

        this.state = {
            drawerOpen: false,
            selectedTab: this.props.tabs ? this.props.tabs[this.props.startingTab] : null,
        };
        logPageView(this.props.tabs[0].tabTitle);
    }

    toggleDrawer() {
        this.setState((prevState) => ({drawerOpen: !prevState.drawerOpen}));
    }

    closeDrawer() {
        this.setState({drawerOpen: false});
    }

    selectTab(index) {
        logPageView(this.tabs[index].tabTitle);
        this.setState({selectedTab: this.tabs[index]})
    }

    render() {
        return (
            <div>
                <Title render={(previousTitle) => `jesse: `}/>
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

                <div>
                    <Title render={(previousTitle) => `${previousTitle} ${this.state.selectedTab.tabTitle}`}/>
                    <SiteContent
                        content={this.state.selectedTab.content}
                    />
                </div>

            </div>
        );
    }
}

function SiteContent(props) {
    return (props.content);
}

function logPageView(pageName) {
    ReactGA.set({ page: pageName });
    ReactGA.pageview(pageName);
}

module.exports = AppFrame;