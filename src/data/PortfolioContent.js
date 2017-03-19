module.exports = {
    gitBrowser: {
        overlay: {
            title: 'GitHub browser for iOS',
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
                expander: true,
            }
        ],
    }
};