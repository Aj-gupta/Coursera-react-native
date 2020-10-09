import React, { Component } from 'react';
import Menu from './MenuComponent';
import { View, Platform} from 'react-native';
import Dishdetail from './DishDetailComponent';

import { createStackNavigator}from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const MenuNavigator = createStackNavigator();

function MenuNavigatorScreen() {
  return(
      <MenuNavigator.Navigator
          initialRouteName='Menu'
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#512DA8"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"            
              }
          }}
      >
          <MenuNavigator.Screen
              name="Menu"
              component={Menu}
          />
          <MenuNavigator.Screen
              name="Dishdetail"
              component={Dishdetail}
              options={{ headerTitle: "Dish Detail"}}
          />            
      </MenuNavigator.Navigator>
  );
}

class Main extends Component {

  render() {
 
   return (
        <NavigationContainer>
            <MenuNavigatorScreen/>           
        </NavigationContainer>
    );
  }
}
  
export default Main;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// {
//   Menu: { screen: Menu },
//   Dishdetail:{ Screen: Dishdetail }
// }, {
// initialRouteName: 'Menu',
// navigationOptions:{
//   headerStyle:{
//     backgroundColor:'#512DA8'
//   },
//   headerTintColor:'#fff',
//   headerTitleStyle:{
//     color:'#fff'
//   }
// }
// }