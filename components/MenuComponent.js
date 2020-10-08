import React from 'react';
import { FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

function Menu(props) {

    const renderMenuItem = ({item, index}) => {

        return (           
            <ListItem key={index} onPress={()=>props.onPress(item.id)}>
            <Avatar source={{source: require('./images/uthappizza.png')}} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        );
    };

    return (
            <FlatList 
                data={props.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}

export default Menu;

 // <ListItem
//     key={index}
//     title={item.name}
//     subtitle={item.description}
//     hideChevron={true}
//     Avatar={{ }}
// />