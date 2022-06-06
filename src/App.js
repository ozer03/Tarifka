import React from 'react';
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//pages
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CategoriesPage' component={Categories} options={{
          title : 'Categories',
          headerTitleStyle : {color : 'orange',},
        }}/>
        <Stack.Screen name='MealsPage' component={Meals} options={{
          title : 'Meals',
          headerTitleStyle : {color : 'orange',},
        }}/>
        <Stack.Screen name='DetailPage' component={Detail} options={{
          title : 'Detail',
          headerTitleStyle : {color : 'orange',},
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;