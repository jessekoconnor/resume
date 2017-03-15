import React from 'react';
import Divider from 'material-ui/Divider';

class AboutThisSite extends React.Component {
    render() {

        let data = {
            title: 'About This Site',
            paragraphs: [
                'I build this site in my spare time using Facebook React, Google\'s material design, and Heroku. It a lot of fun to get to know these technologies and utilize them for yourself. Feel free to look at the project and use it for yourself.',
                'This other part will be here too',
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