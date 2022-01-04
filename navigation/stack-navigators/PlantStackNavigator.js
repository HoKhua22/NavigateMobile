import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screens } from '../RouteItems';
import PlantScreen from '../../screens/PlantScreen';
const Stack = createStackNavigator();

const PlantStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.PlantStack} component={PlantScreen} />
    </Stack.Navigator>
  );
};

export default PlantStackNavigator;
