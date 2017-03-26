import React from 'react';
import Divider from 'material-ui/Divider';

// source imports
import Widget from './Widget';

class Dashboard extends React.Component {
    render() {

        let data = {
            title: 'Dashboard',
            paragraphs: [
                'This is where my morning dashboard is hosted. I use it every day to keep up to date on web accessible information that is important to me on a daily basis.',
            ],
            widgets: [{
                name: 'PressRoom Widget',
                header: {
                    title: 'Press Room',
                    subtitle: 'http://www.pressroomnh.com/calendar/'
                },
                content: [
                    {
                        type: 'event',
                        title: 'Bangkok Disco',
                        image: 'http://cdn.ticketfly.com/i/00/01/85/34/43-og.jpg',
                        url: 'http://www.pressroomnh.com/event/1442976-bangkok-disco-portsmouth/',
                        date: 'THU · MAR 30',
                    },
                    {
                        type: 'event',
                        title: 'Lux Lives East Coast 2017',
                        image: 'http://salem.org/wp-content/uploads/2017/01/15578072_1420087261357119_6484048028352168852_o.jpg',
                        url: 'http://www.pressroomnh.com/event/1442982-lux-lives-east-coast-2017-portsmouth/',
                        date: 'SAT · APR 1',
                    },
                    {
                        type: 'event',
                        title: 'Stop Tito',
                        image: 'http://cdn.ticketfly.com/i/00/01/75/34/25-atlg.jpg',
                        url: 'http://www.pressroomnh.com/event/1455581-stop-tito-portsmouth/',
                        date: 'FRI · APR 7',
                    },
                    {
                        type: 'event',
                        title: 'Big Ol\' Dirty Bucket',
                        image: 'https://f4.bcbits.com/img/a3722442058_16.jpg',
                        url: 'http://www.pressroomnh.com/event/1446144-big-ol-dirty-bucket-portsmouth/',
                        date: 'FRI · APR 21',
                    },
                    {
                        type: 'event',
                        title: 'Ruby Rose Fox',
                        image: 'https://pbs.twimg.com/profile_images/720657910221643778/DEDe3tX4.jpg',
                        url: 'http://www.pressroomnh.com/event/1446166-ruby-rose-fox-red-tail-hawk-portsmouth/',
                        date: 'FRI · APR 28',
                    },
                ]
            }]
        };

        return (
            <div style={{
                margin: '48px 72px',
            }}>
                <h2> {data.title} </h2>
                <Divider />
                <Paragraphs paragraphs={data.paragraphs} />
                <Widgets widgets={data.widgets} />
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
function Widgets(props) {
    let items = [];
    for (let i = 0; props.widgets && i < props.widgets.length; i++) {
        let widget = props.widgets[i];
        items.push(<Widget data={widget} key={i}/>);
    }
    return items.length > 0 ? <div>{items}</div> : null;
}

module.exports = Dashboard;