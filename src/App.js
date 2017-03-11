import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import resumeContent from './Content';
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
        const styles = {
            largeIcon: {
                width: 60,
                height: 60,
            },
        };

        return (
            <div>
                <AppBar
                    title="Resume Site"
                    onLeftIconButtonTouchTap={this.toggleDrawer}
                    iconElementRight={
                        <FlatButton
                            href="https://github.com/jessekoconnor/resume"
                            target="_blank"
                            label="See this site on github"
                            secondary={true}
                            icon={<FontIcon className="muidocs-icon-custom-github" />}
                        />
                    }
                >
                </AppBar>

                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.drawerOpen}
                    onRequestChange={this.toggleDrawer}
                >
                    <IconButton onTouchTap={this.closeDrawer}>
                        <ActionHome style={styles.largeIcon}/>
                    </IconButton>
                    <MenuItem onTouchTap={this.closeDrawer}>
                        <FlatButton label="Resume"/>
                    </MenuItem>
                </Drawer>

                <ResumeSection content={resumeContent.experience}/>
                <ResumeSection content={resumeContent.skills}/>
                <ResumeSection content={resumeContent.education}/>
            </div>
        );
    }
}