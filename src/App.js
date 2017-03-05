import React from 'react';
import {Card, CardMedia, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import bigData from './Content';

const styles = {
    experience: {
        width: '90%',
        margin: '10px auto 10px auto',
        border: '2px',
    }
};

const CardExampleWithAvatar = () => (
    <div>
        <AppBar title="Resume Site"/>

        <Experience content={bigData.experience}/>
    </div>
);

function Experience(props) {
    return (
        <Card style={styles.experience}>
            {/*<CardHeader title={props.content.header.title}/>*/}

            <Overlay overlay={props.content.overlay}/>

            <CompanyExperiences companies={props.content.companies}/>
        </Card>);
}

function CompanyExperiences(props) {
    let items = [];
    for (let i = 0; i < props.companies.length; i++) {
        items.push(
            <CompanyExperience key={i} company={props.companies[i]}/>
        );
    }
    return <div>{items}</div>;
}

function CompanyExperience(props) {
    return (
        <Card >
            <CardTitle
                title={props.company.title}
                subtitle={props.company.subTitle}
                actAsExpander
                showExpandableButton
            />

            <CardText expandable={true}>
                {props.company.paragraph}
                <CompanyDetails details={props.company.details}/>
            </CardText>

        </Card>
    );
}

function CompanyDetails(props) {
    let items = [];
    for (let i = 0; i < props.details.length; i++) {
        let detail = props.details[i];
        items.push(<li key={detail}>{detail}</li>);
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