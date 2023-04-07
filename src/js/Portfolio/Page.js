import React from 'react';
import Divider from 'material-ui/Divider';
import PortfolioSection from './PortfolioSection';

class Portfolio extends React.Component {
  render() {

    let PortfolioContent = {
      title: 'Portfolio',
      intro: [
        'This is a collection of my work, from new to old. If anything (including this site) sparks your interest, fork away, I am glad to share.'
      ],
      dashMobile: {
        header: {
          title: 'Dash Mobile',
          subtitle: 'jessekoconnor/dash-mobile',
          avatarHref: 'https://github.com/jessekoconnor/server-side-slinger',
        },
        overlay: {
          imageURL1: 'https://drive.google.com/uc?export=view&id=1jBCEviRtQGRB6iBtuAsR-k4QYhna9j0w',
        },

        subCards: [
          {
            title: 'Dash Mobile',
            subTitle: 'A mobile app && aws backed built to grab info from your favorite sites in a flash. No need to navigate to six different websites anymore to find the best show in town tonight',
          },
        ],
        expander: true,
      },
      gitBrowser: {
        header: {
          title: 'gitBrowser',
          subtitle: 'jessekoconnor/gitBrowser',
          avatarHref: 'https://github.com/jessekoconnor/gitBrowser',
        },
        overlay: {
          imageURL1: 'https://s3.amazonaws.com/githubprojects/gitBrowser/Login.png',
          imageURL2: 'https://s3.amazonaws.com/githubprojects/gitBrowser/Feed.png',
          imageURL3: 'https://s3.amazonaws.com/githubprojects/gitBrowser/Search.png',
        },

        subCards: [
          {
            title: 'GitBrowser',
            subTitle: 'A GitHub browser for iOS',
            cardText: {
              paragraphs: ['This app is built with react-native and utilizes the github api. I Made it to satisfy a desire to learn react and to get an introduction to mobile development. It can be used to log into github and view recent activity in your gitHub feed. It can also be used to search github for repositories relevant to certain keyworkd specified.',
              ],
            },
          },
        ],
        expander: true,
      },
    },
      styles = {
        wrapper: {
          width: '94%',
          margin: '6px auto 6px auto',
        },
      };

    return (
      <div style={styles.wrapper}>
        <h2> {PortfolioContent.title} </h2>
        <Divider />
        <Paragraphs paragraphs={PortfolioContent.intro} />

        <PortfolioSection content={PortfolioContent.dashMobile} />
        <PortfolioSection content={PortfolioContent.gitBrowser} />
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