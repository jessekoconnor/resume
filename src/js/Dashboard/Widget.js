import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import {List, ListItem} from 'material-ui/List';

import ContentSend from 'material-ui/svg-icons/content/send';

class Widget extends React.Component {
    render() {

        this.title = this.props.data.config ? this.props.data.config.title : '';
        this.subTitle = this.props.data.config ? this.props.data.config.url : '';
        this.results = this.props.data.result ? this.props.data.result : [];

        return (
            <Card>
                <CardHeader
                    title={this.title}
                    subtitle={this.subTitle}
                />
                <CardText expandable={false}>
                    <ContentLists content={this.results}/>
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
    return items.length > 0 ? <List><Divider /><Subheader>{props.content.date}</Subheader>{items}</List> : null;
}

module.exports = Widget;