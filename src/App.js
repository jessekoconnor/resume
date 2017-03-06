import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import resumeContent from './Content';

const styles = {
    resumeSection: {
        width: '90%',
        margin: '10px auto 10px auto',
        border: '2px',
    }
};

const CardExampleWithAvatar = () => (
    <div>
        <AppBar title="Resume Site"/>

        <ResumeSection content={resumeContent.experience}/>
        <ResumeSection content={resumeContent.skills}/>
        <ResumeSection content={resumeContent.education}/>
    </div>
);

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

export default CardExampleWithAvatar;