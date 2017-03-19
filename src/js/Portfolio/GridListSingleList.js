import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        height: '715px',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        flexShrink: 0,
        overflowX: 'auto',
        height: 'auto',
    },
    gridTile: {
        margin: '5px',
        height: 'auto',

    },
    titleStyle: {
        color: 'rgb(1, 0, 0)',
    },
    img: {
        minHeight: '100%',
        minWidth: '100%',
    }
};

const tilesData = [
    {
        img: 'https://s3.amazonaws.com/githubprojects/gitBrowser/Login.png',
        title: 'Login',
    },
    {
        img: 'https://s3.amazonaws.com/githubprojects/gitBrowser/Feed.png',
        title: 'Feed',
    },
    {
        img: 'https://s3.amazonaws.com/githubprojects/gitBrowser/Search.png',
        title: 'Search',
    },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSingleLine = () => (
    <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    titleStyle={styles.titleStyle}
                    style={styles.gridTile}
                >
                    <img src={tile.img} style={styles.img}/>
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default GridListExampleSingleLine;