import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
  render() {
    return (<View>
        <Card>
            <Card.Title>Contact Information</Card.Title>
            <Card.Divider/>
            <View>
                <Text style = {{marginTop: 10}}>121, Clear Water Bay Road</Text>
                <Text style = {{marginTop: 10}}>Clear Water Bay, Kowloon</Text>
                <Text style = {{marginTop: 10}}>HONG KONG</Text>
                <Text style = {{marginTop: 10}}>Tel: +852 1234 5678</Text>
                <Text style = {{marginTop: 10}}>Fax: +852 8765 4321</Text>
                <Text style = {{marginTop: 10}}>Email:confusion@food.net</Text>
            </View>
        </Card>
    </View>);
  }

}
export default Contact;