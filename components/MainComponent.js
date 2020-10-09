import React, { Component } from 'react';
import Menu from './MenuComponent';
import { View, Platform} from 'react-native';
import Dishdetail from './DishDetailComponent';
import Home from './HomeComponent';
import { createStackNavigator}from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = createStackNavigator();
function MenuNavigatorScreen() {
  return(
      <StackNavigator.Navigator
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
          <StackNavigator.Screen
              name="Menu"
              component={Menu}
          />
          <StackNavigator.Screen
              name="Dishdetail"
              component={Dishdetail}
              options={{ headerTitle: "Dish Detail"}}
          />
          <StackNavigator.Screen 
                name="Home"
                component={Home}/>            
      </StackNavigator.Navigator>
  );
}
// const HomeNavigator = createStackNavigator();

function HomeNavigatorScreen(){
    return(
    <StackNavigator.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff"            
            }
        }}>        
                <StackNavigator.Screen 
                    name="Home"
                    component={Home}/> 
                </StackNavigator.Navigator>
    );
}

const MainNavigator = createDrawerNavigator();

function MyDrawer(){
    return(
        <MainNavigator.Navigator>
                <MainNavigator.Screen name="Home" component={HomeNavigatorScreen} />
                <MainNavigator.Screen name="Menu" component={MenuNavigatorScreen} />
        </MainNavigator.Navigator>
    );
}

class Main extends Component {

  render() {
 
   return (
        <NavigationContainer>
            <MyDrawer />           
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