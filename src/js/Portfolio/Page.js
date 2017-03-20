import React from 'react';
import Divider from 'material-ui/Divider';
import PortfolioSection from './PortfolioSection';
import PortfolioContent from '../../data/PortfolioContent';

class Portfolio extends React.Component {
    render() {

        let data = {
            title: 'Portfolio',
            intro: [
                'This is a collection of my work, from new to old. If anything (including this site) sparks your interest, fork away, I am glad to share.'
            ],
        };

        return (
            <div style={{
                width: '90%',
                margin: '10px auto 10px auto',
            }}>
                <h2> {data.title} </h2>
                <Divider />
                <Paragraphs paragraphs={data.intro} />

                <PortfolioSection content={PortfolioContent.gitBrowser}/>
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