import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import { screens, routes } from './RouteItems';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ nav }) => {
  // const currentRouteName = nav()?.getCurrentRoute()?.name;
  return (
    <Drawer.Navigator
      // screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} nav={nav} />}
    >
      <Drawer.Screen
        name={screens.HomeTab}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
});

export default DrawerNavigator;
