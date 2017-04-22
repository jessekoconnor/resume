import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import {List, ListItem} from 'material-ui/List';

import ContentSend from 'material-ui/svg-icons/content/send';

class Widget extends React.Component {
    render() {

        return (
            <Card>
                <CardHeader
                    title={this.props.content.title}
                    subtitle={this.props.content.url}
                />
                <CardText expandable={false}>
                    <ContentLists content={this.props.content.data}/>
                </CardText>
            </Card>
        );
    }
}

function ContentLists(props) {
    let items = [];
    for (let i = 0; props.content && i < props.content.length; i++) {
        let entry = props.content[i];
        items.push(<ContentItem key={i} content={entry} />);
    }
    return items.length > 0 ? <List>{items}</List> : null;
}

function ContentItem(props) {
    let items = [];
    for (let i = 0; props.content.titles && i < props.content.titles.length; i++) {
        let title = props.content.titles[i];
        items.push(<ListItem key={i} primaryText={title} leftIcon={<ContentSend/>} />);
    }
    return items.length > 0 ? <List><Subheader>{props.content.date}</Subheader>{items}<Divider /></List> : null;
}

module.exports = Widget;