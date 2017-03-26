import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import {List, ListItem} from 'material-ui/List';

import ContentSend from 'material-ui/svg-icons/content/send';

class Widget extends React.Component {
    render() {

        return (
            <Card>
                <CardHeader
                    title={this.props.data.header.title}
                    subtitle={this.props.data.header.subtitle}
                />
                <CardText expandable={false}>
                    <WidgetBody content={this.props.data.content}/>
                </CardText>
            </Card>
        );
    }
}

function WidgetBody(props) {
    let items = [];
    for (let i = 0; props.content && i < props.content.length; i++) {
        let entry = props.content[i];
        items.push(<ListItem key={i} primaryText={entry.title} leftIcon={<ContentSend/>} />);
    }
    return items.length > 0 ? <List>{items}</List> : null;
}

module.exports = Widget;