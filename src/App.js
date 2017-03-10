import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import resumeContent from './Content';

const styles = {
    resumeSection: {
        width: '90%',
        margin: '10px auto 10px auto',
        border: '2px',
    }
};

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
        const styless = {
            smallIcon: {
                width: 36,
                height: 36,
            },
            mediumIcon: {
                width: 48,
                height: 48,
            },
            largeIcon: {
                width: 60,
                height: 60,
            },
            small: {
                width: 72,
                height: 72,
                padding: 16,
            },
            medium: {
                width: 96,
                height: 96,
                padding: 24,
            },
            large: {
                width: 120,
                height: 120,
                padding: 30,
            },
        };

        return (
            <div>
                <AppBar title="Resume Site" iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={this.toggleDrawer}>
                    <Tabs>


                    </Tabs>
                </AppBar>

                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.drawerOpen}
                    onRequestChange={this.toggleDrawer}
                >
                    <IconButton onTouchTap={this.closeDrawer}>
                        <ActionHome styles={styless.largeIcon}/>
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

// Returns a resume section
function ResumeSection(props) {
    return (
        <Card style={styles.resumeSection}>
            {/*<CardHeader title={props.content.header.title}/>*/}

            <Overlay overlay={props.content.overlay}/>

            <SubCards subCards={props.content.subCards}/>
        </Card>);
}

// Returns an overlay with image and title
function Overlay(props) {
    return (
        <CardMedia overlay={<CardTitle title={props.overlay.title}/>}>
            <img src={props.overlay.imageURL} role="presentation"/>
        </CardMedia>
    );
}

// Returns an array of subcards
function SubCards(props) {
    let items = [];
    for (let i = 0; i < props.subCards.length; i++) {
        items.push(
            <SubCard key={i} subCard={props.subCards[i]}/>
        );
    }
    return <div>{items}</div>;
}

// Returns a subcard for a resume section
function SubCard(props) {
    return (
        <Card >
            <CardTitle
                title={props.subCard.title}
                subtitle={props.subCard.subTitle}
                actAsExpander={props.subCard.expander || false}
                showExpandableButton={props.subCard.expander || false}
            />

            <SubCardText cardText={props.subCard.cardText} expandable={props.subCard.expander || false}/>
        </Card>
    );
}

// Returns a card text for a subCard
function SubCardText(props) {
    return props.cardText ? (
            <CardText>
                <Paragraphs paragraphs={props.cardText.paragraphs}/>
                <Bullets bullets={props.cardText.bullets}/>
            </CardText>
        ) : null;
}

// Returns an array of <p></p>'s
function Paragraphs(props) {
    let items = [];
    for (let i = 0; props.paragraphs && i < props.paragraphs.length; i++) {
        let paragraph = props.paragraphs[i];
        items.push(<p key={paragraph}>{paragraph}</p>);
    }
    return items.length > 0 ? <div>{items}</div> : null;
}

// Returns an array of <li/>'s under a <ul/>
function Bullets(props) {
    let items = [];
    for (let i = 0; props.bullets && i < props.bullets.length; i++) {
        let bullet = props.bullets[i];
        items.push(<li key={bullet}>{bullet}</li>);
    }
    return items.length > 0 ? <ul>{items}</ul> : null;
}