import React from 'react';
import Divider from 'material-ui/Divider';

class AboutThisSite extends React.Component {
    render() {

        let data = {
            title: 'About This Site',
            paragraphs: [
                'I built this site in my spare time using Facebook React, Google\'s material design, and Heroku. Feel free to look at the project and use it for yourself by clicking the github icon on the top right corner of this application.',
            ],
        };

        return (
            <div style={{
                margin: '48px 72px',
            }}>
                <h2> {data.title} </h2>
                <Divider />
                <Paragraphs paragraphs={data.paragraphs} />
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

module.exports = AboutThisSite;