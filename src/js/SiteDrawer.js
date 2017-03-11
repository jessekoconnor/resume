import React from 'react';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import MenuItem from 'material-ui/MenuItem';

class SiteDrawer extends React.Component {
    render() {
        const styles = {
            largeIcon: {
                width: 60,
                height: 60,
            },
        };

        return (
            <Drawer
                docked={false}
                width={200}
                open={this.props.drawerOpen}
                onRequestChange={this.props.toggleDrawer}
            >
                <IconButton onTouchTap={this.props.closeDrawer}>
                    <ActionHome style={styles.largeIcon}/>
                </IconButton>
                <MenuItem onTouchTap={this.props.closeDrawer}>
                    <FlatButton label="Resume"/>
                </MenuItem>
            </Drawer>
        );
    }
}

module.exports = SiteDrawer;