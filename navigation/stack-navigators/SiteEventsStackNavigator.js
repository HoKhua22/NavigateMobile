import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SiteEventsScreen from '../../screens/SiteEventsScreen';
import { screens } from '../RouteItems';

const Stack = createStackNavigator();

const SiteEventsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.SiteEvents} component={SiteEventsScreen} />
    </Stack.Navigator>
  );
};

export default SiteEventsStackNavigator;
