import React from 'react';
import Divider from 'material-ui/Divider';

// source imports
import Widget from './Widget';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.WidgetContent = this.WidgetContent.bind(this);

        this.state = {
            widgetData: []
        }
    }

    componentDidMount() {
        this.WidgetContent();
    }

    WidgetContent() {
        return fetch(`http://localhost:8081/scrapePressRoom`)
            .then(function(result) {
                result.json().then(function(data) {
                    console.log('recieved events: ', data);
                    this.setState({widgetData: data});
                }.bind(this));
            }.bind(this));
    }

    render() {
        let data = {
            title: 'Dashboard',
            paragraphs: [
                'This is where my morning dashboard is hosted. I use it every day to keep up to date on web accessible information that is important to me on a daily basis.',
            ]
        };

        return (
            <div style={{
                margin: '48px 72px',
            }}>
                <h2> {data.title} </h2>
                <Divider />
                <Paragraphs paragraphs={data.paragraphs} />
                <Widget content={this.state.widgetData}/>
            </div>
        );
    }
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

// Returns an array of <Widget/>'s
// function Widgets(props) {
//     let items = [];
//     for (let i = 0; props.widgets && i < props.widgets.length; i++) {
//         let widget = props.widgets[i];
//         items.push(<Widget meta={widget} key={i}/>);
//     }
//     return items.length > 0 ? <div>{items}</div> : null;
// }

module.exports = Dashboard;