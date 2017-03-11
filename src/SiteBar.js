import React from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

class SiteBar extends React.Component {
    render() {
        return (
            <AppBar
                title="Resume Site"
                onLeftIconButtonTouchTap={this.props.toggleDrawer}
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
        );
    }
}

module.exports = SiteBar;


