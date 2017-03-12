import React from 'react';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import MenuItem from 'material-ui/MenuItem';

class SiteDrawer extends React.Component {
    render() {
        return (
            <Drawer
                docked={false}
                width={200}
                open={this.props.drawerOpen}
                onRequestChange={this.props.toggleDrawer}
            >
                <Home closeDrawer={this.props.closeDrawer} />
                <Tabs closeDrawer={this.props.closeDrawer} selectTab={this.props.selectTab} tabs={this.props.tabs}/>
            </Drawer>
        );
    }
}

function Home(props) {
    return (
        <IconButton onTouchTap={props.closeDrawer}>
            <ActionHome style={{
                width: 60,
                height: 60,
            }}/>
        </IconButton>
    );
}

// Returns an array of tabs
function Tabs(props) {
    let items = [];
    for (let i = 0; props.tabs && i < props.tabs.length; i++) {
        items.push(
            <Tab key={i} index={i} selectTab={props.selectTab} closeDrawer={props.closeDrawer} tab={props.tabs[i]}/>
        );
    }
    return <div>{items}</div>;
}

class Tab extends React.Component {
    constructor(props) {
        super(props);

        this.clickTab = this.clickTab.bind(this);
    }

    clickTab() {
        this.props.selectTab(this.props.index);
        this.props.closeDrawer();
    }

    render() {
        return(
            <MenuItem onTouchTap={this.clickTab} primaryText={this.props.tab.tabTitle}>
            </MenuItem>
        );
    }
}

module.exports = SiteDrawer;