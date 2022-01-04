import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screens } from '../RouteItems';
import LinkScreen from '../../screens/LinkScreen';
const Stack = createStackNavigator();

const LinkStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.LinkStack} component={LinkScreen} />
    </Stack.Navigator>
  );
};

export default LinkStackNavigator;
