import React from 'react';
import Title from 'react-title-component';
import Divider from 'material-ui/Divider';

class Portfolio extends React.Component {
    render() {

        let data = {
            title: 'Portfolio',
            paragraphs: [
                'This is my portfolio of work. I have a react native mobile app here.',
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

module.exports = Portfolio;