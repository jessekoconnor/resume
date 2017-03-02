import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

const styles = {
    card: {
        width: '80%'
    }
};

const CardExampleWithAvatar = () => (
    <div>
        <AppBar title="Resume Site"/>

        <Card
            style={{
                width: '70%',
                margin: '0 auto',
                border: '2px'
            }}>
            <CardHeader
                title="Jesse O'Connor"
                subtitle="Engineer II"
                avatar="https://i.stack.imgur.com/kdrpp.png"
            />
            <CardMedia
                overlay={<CardTitle title="Experience" subtitle=""/>}
            >
                <img src="http://www.copperstateengineering.com/wp-content/uploads/2016/01/engineering-blueprint.jpg"/>
            </CardMedia>
            <CardTitle title="Software Engineer2, Meltwater" subtitle="Manchester, NH: 2014 to Present"/>
            <CardText>
                Member of agile engineering team dedicated to a SAAS media monitoring solution
            </CardText>
            <CardTitle title="Developer, UNH InterOperability Laboratory" subtitle="Durham, NH: 2009 to 2013"/>
            <CardText>
                Developer and Test Technician of networking and data communication testing services.
            </CardText>
            <CardActions>
                <FlatButton label="Click for projects from meltwater" onClick={() => console.log('click1')}/>
                <FlatButton label="Click for projects from IOL" onClick={() => console.log('click2')}/>
            </CardActions>
        </Card>
    </div>
);

export default CardExampleWithAvatar;