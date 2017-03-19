import React from "react";
import {Card, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";
import Avatar from 'material-ui/Avatar';
import GitHub from '../../../images/github/GitHub-Mark-32px.png';
import GridListSingleLine from './GridListSingleList';


// Returns a resume section
class PortfolioSection extends React.Component {
    render() {
        let styles = {
            resumeSection: {},
            cardOverlay: {}
        };

        return (
            <Card style={styles.resumeSection} className="row">
                <CardHeader
                    title="Github Browser"
                    subtitle="An iOS application for browsing github"
                    avatar={
                        <Avatar icon={
                            <img src={GitHub} alt="Logo" />
                        } onTouchTap={avatarClick}
                        style={{cursor: "pointer"}}/>
                    }
                />
                <CardOverlay style={styles.cardOverlay} />

                <SubCards subCards={this.props.content.subCards}/>

            </Card>);
    }
}

function avatarClick() {
    window.location = "https://github.com/jessekoconnor/gitBrowser";
};

// Returns an overlay with image and title
function CardOverlay(props) {
    return (
        <CardMedia >
            <GridListSingleLine />
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
                title={<GetModifiedTitle subCard={props.subCard}/>}
                subtitle={props.subCard.subTitle}
                actAsExpander={props.subCard.expander || false}
                showExpandableButton={props.subCard.expander || false}
            />


            <SubCardText cardText={props.subCard.cardText} expandable={props.subCard.expander || false}/>
        </Card>
    );
}

function GetModifiedTitle(props) {
    if (props.subCard.title) {
        return (<div>{props.subCard.title}</div>);
    } else if (props.subCard.codeTitle) {
        return (
            <code>{props.subCard.codeTitle}</code>
        );
    }
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

module.exports = PortfolioSection;