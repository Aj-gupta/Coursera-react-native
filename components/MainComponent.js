import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { View } from 'react-native';
import Dishdetail from './DishDetailComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish:null
    };
  }

  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
  }

  render() {
 
    return (
        <View>
        <Menu dishes={this.state.dishes} 
              onPress={(dishId) => this.onDishSelect(dishId)}/>
        <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} />  
        </View>
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