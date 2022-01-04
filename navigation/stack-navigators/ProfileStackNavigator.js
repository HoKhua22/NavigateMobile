import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screens } from '../RouteItems';
import ProfileScreen from '../../screens/ProfileScreen';
const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.ProfileStack} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
