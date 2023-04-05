import React from "react";
import {Card, CardMedia, CardTitle, CardText} from "material-ui/Card";

// Returns a resume section
class ResumeSection extends React.Component {
    render() {
        let styles = {
            resumeSection: {
                margin: '50px auto 10px auto',
                border: '2px',
                // add space after the card
            }
        };

        return (
            <Card style={styles.resumeSection}>
                {/*<CardHeader title={props.content.header.title}/>*/}

                <CardOverlay overlay={this.props.content.overlay}/>

                <SubCards subCards={this.props.content.subCards}/>
            </Card>);
    }
}

// Returns an overlay with image and title with centering on the image
function CardOverlay(props) {
  let styles;
    // style to center the image and limit the size
    styles = {
        cardOverlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '1000px',
            width: '100%',
            overflow: 'hidden',
        },
        cardOverlayImage: {
            height: '100%',
            width: 'auto',
        },
    };

    // style to center on image top
    if (props.overlay.imageTop) {
      styles = {
        cardOverlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '1000px',
            width: '100%',
            overflow: 'hidden',
        },
        cardOverlayImage: {
            height: '100%',
            width: 'auto',
        },
      };
    }

    // style to center on image top
    if (props.overlay.shortImage) {
      styles = {
        cardOverlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '500px',
            width: '100%',
            overflow: 'hidden',
        },
        cardOverlayImage: {
            height: '100%',
            width: 'auto',
        },
      };
    }

    return (
        <CardMedia overlay={<CardTitle title={props.overlay.title}/>} style={styles.cardOverlay}>
            <img src={props.overlay.imageURL} role="presentation" style={styles.cardOverlayImage} />
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

// Returns an array of subcards
function SubCardTexts(props) {
    let items = [];
    for (let i = 0; i < props.cardTexts.length; i++) {
        items.push(
            <SubCardText cardText={props.cardTexts[i]} expandable={props.expandable || false}/>
        );
    }
    return <div>{items}</div>;
}
// <SubCardText cardText={props.subCard.cardText} expandable={props.subCard.expander || false}/>

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


            <SubCardTexts cardTexts={props.subCard.cardText} expandable={true}/>
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

module.exports = ResumeSection;