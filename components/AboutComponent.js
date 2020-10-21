import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

import { FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';
import { ScrollView } from 'react-native-gesture-handler';

class RenderHistory extends Component{
    render(){
        return (
            <Card>
                <Card.Title>Our History</Card.Title>
                <Card.Divider />
                <View style = {{lineHeight : 2}}>
                    <Text style = {{marginTop: 10}}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong.
                    With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list
                    clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will
                    arrive on your plate the next time you visit us
                    </Text>
                    <Text style = {{marginTop: 10 }}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr.
                    Peter Pan, that featured for the first time the world's best cuisines in a pan.
                    </Text>
                </View>
            </Card>
        )
    }
}

class RenderLeadership extends Component{   
    
    render(){
        return(
            <Card>
                <Card.Title>Corporate Leadership</Card.Title>
                <Card.Divider></Card.Divider>
                <FlatList data={this.props.items}
                renderItem={({ item, index }) => this.renderLeaderItem(item, index)}
                keyExtractor={item => item.id.toString()} />
            </Card>
        )
    }
    renderLeaderItem(item, index) {
        return (
            <ListItem key={index}>
                <Avatar rounded source={require('./images/alberto.png')}/>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS
        };
    }
    render() {
        return (<ScrollView>
            <RenderHistory></RenderHistory>
            
            <RenderLeadership items = {this.state.leaders}></RenderLeadership>
        </ScrollView>);
    }


    
}
export default About;