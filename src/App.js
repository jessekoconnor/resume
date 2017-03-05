import React from 'react';
import {Card, CardMedia, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import bigData from './Content';

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

        <ResumeSection content={bigData.experience}/>
    </div>
);

function ResumeSection(props) {
    return (
        <Card style={styles.resumeSection}>
            {/*<CardHeader title={props.content.header.title}/>*/}

            <Overlay overlay={props.content.overlay}/>

            <SubCards subCards={props.content.subCards}/>
        </Card>);
}

function SubCards(props) {
    let items = [];
    for (let i = 0; i < props.subCards.length; i++) {
        items.push(
            <SubCard key={i} subCard={props.subCards[i]}/>
        );
    }
    return <div>{items}</div>;
}

function SubCard(props) {
    return (
        <Card >
            <CardTitle
                title={props.subCard.title}
                subtitle={props.subCard.subTitle}
                actAsExpander
                showExpandableButton
            />

            <CardText expandable={true}>
                {props.subCard.paragraph}
                <Bullets details={props.subCard.details}/>
            </CardText>

        </Card>
    );
}

function Bullets(props) {
    let items = [];
    for (let i = 0; i < props.bullets.length; i++) {
        let bullet = props.bullets[i];
        items.push(<li key={bullet}>{bullet}</li>);
    }
    return <ul>{items}</ul>;
}

function Overlay(props) {
    return (
        <CardMedia overlay={<CardTitle title={props.overlay.title}/>}>
            <img src={props.overlay.imageURL}/>
        </CardMedia>
    );
}

export default CardExampleWithAvatar;