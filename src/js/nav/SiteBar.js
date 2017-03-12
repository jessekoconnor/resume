import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import GitHub from '../../../images/github/GitHub-Mark-32px.png';

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
                        secondary={true}
                        icon={<img src={GitHub} alt="Logo" />}
                    />
                }
            >
            </AppBar>
        );
    }
}

module.exports = SiteBar;


