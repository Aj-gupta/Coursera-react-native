import React, { Component } from 'react';
import Menu from './MenuComponent';
// import { View, Platform} from 'react-native';
import Dishdetail from './DishDetailComponent';
import Contact from './ContactComponent'
import Home from './HomeComponent';
import About from './AboutComponent';
import { createStackNavigator}from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
console.log(Icon);

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
            // options={({navigation}) => ({
            //       headerLeft: <Icon name='menu' size={24}
            //             color='white'
            //             onPress={() => navigation.toggleDrawer()} 
            //             />
            //   })
            // }
          />
          <StackNavigator.Screen
              name="Dishdetail"
              component={Dishdetail}
              options={{ headerTitle: "Dish Detail"}}
          />                
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
        }}
                >        
                <StackNavigator.Screen 
                    name="Home"
                    component={Home}/> 
    </StackNavigator.Navigator>
    );
}

function AboutNavigatorScreen(){
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
                        name="About Us"
                        component={About}/> 
                    </StackNavigator.Navigator>
        );
}

function ContactNavigatorScreen(){
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
                        name="Contact Us"
                        component={Contact}/> 
                    </StackNavigator.Navigator>
        );
}

const MainNavigator = createDrawerNavigator();

function MyDrawer(){
    return(
        <MainNavigator.Navigator>
                <MainNavigator.Screen name="Home" component={HomeNavigatorScreen} 
                                    options={{
                                        drawerLabel:'Home',
                                        drawerIcon: ({ tintColor, size }) => (
                                          <Icon name='home' size={size}
                                          type='font-awesome'
                                          color={tintColor}
                                                      
                                                      />)
                                     }}
                                    />

                <MainNavigator.Screen name="About Us" component={AboutNavigatorScreen} 
                                    options={{
                                        drawerLabel:'About Us',
                                        drawerIcon: ({ tintColor, size }) => (
                                          <Icon name='info-circle' size={size}
                                          type='font-awesome'
                                                      color={tintColor}
                                                     
                                                      />)
                                     }}
                                    />

                <MainNavigator.Screen name="Menu" component={MenuNavigatorScreen} 
                                    options={{
                                        drawerLabel:'Menu',
                                        drawerIcon: ({ tintColor, size }) => (
                                          <Icon name='list' size={size}
                                          type='font-awesome'
                                          color={tintColor}
                                                      
                                                      />)
                                     }}
                                    />

                <MainNavigator.Screen name="Contact Us" component={ContactNavigatorScreen}
                                    options={{
                                        drawerLabel:'Contact Us',                                        
                                        drawerIcon: ({ tintColor, size }) => (
                                          <Icon name='address-card'
                                                      type='font-awesome'
                                                      size={size}
                                                      color={tintColor}
                                                      
                                                      />)
                                     }}
                                    />
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