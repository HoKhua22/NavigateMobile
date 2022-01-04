import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RequistionScreen from '../../screens/RequisitionScreen';
import { screens } from '../RouteItems';

const Stack = createStackNavigator();

const RequisitionStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.Requisition} component={RequistionScreen} />
    </Stack.Navigator>
  );
};

export default RequisitionStackNavigator;
