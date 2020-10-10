import React from 'react';
import { Card } from 'react-native-elements';
import { Text } from 'react-native';

function Contact(){
    return(
        <Card>
            <Card.Title>Contact Information</Card.Title>
                <Text style={{margin: 10}}>121, Clear Water Bay Road</Text>
                <Text style={{margin: 10}}>Clear Water Bay, Kowloon</Text>
                <Text style={{margin: 10}}>HONG KONG</Text>
                <Text style={{margin: 10}}>Fax: +852 8765 4321</Text>
                <Text style={{margin: 10}}>Email:confusion@food.net</Text>
        </Card>
    );
}

export default Contact;