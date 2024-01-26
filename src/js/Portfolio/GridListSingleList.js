import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        height: 'auto',

    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        width: 'auto',
        height: 'auto',
        div: {
            height: 'auto',
        }
    },
    gridTile: {
        display: 'flex',
        margin: '5px',
        height: 'auto',
        width: 'auto',
    },
    img: {
        width:'100%',
        height:'100%',
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
class GridListExampleSingleLine extends React.Component {
    render() {
        // console.log('GridListExampleSingleLine', this.props.overlay.images);
        // if (!this.props.overlay.images || this.props.overlay.images.length > 0)
        //     return;

        return (
            <div style={styles.root}>
                <GridList style={styles.gridList} cols={2.2} cellHeight='auto'>
                    {this.props.images && this.props.images.map((tile) => (
                        <GridTile
                            key={tile.img || tile}
                            style={styles.gridTile}
                        >
                            <img src={tile.img || tile} style={styles.img} role="presentation"/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    };
}

export default GridListExampleSingleLine;