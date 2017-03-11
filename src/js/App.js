import React from 'react';

// imports from this directory
import SiteBar from './SiteBar';
import SiteDrawer from './SiteDrawer';
import ResumeContent from './Content';
import ResumeSection from './ResumeSection';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);

        this.state = {drawerOpen: false};
    }

    toggleDrawer() {
        this.setState((prevState) => ({drawerOpen: !prevState.drawerOpen}));
    }

    closeDrawer() {
        this.setState({drawerOpen: false});
    }

    render() {
        return (
            <div>
                <SiteBar toggleDrawer={this.toggleDrawer}/>
                <SiteDrawer
                    drawerOpen={this.state.drawerOpen}
                    toggleDrawer={this.toggleDrawer}
                    closeDrawer={this.closeDrawer}
                />


                <ResumeSection content={ResumeContent.experience}/>
                <ResumeSection content={ResumeContent.skills}/>
                <ResumeSection content={ResumeContent.education}/>
            </div>
        );
    }
}