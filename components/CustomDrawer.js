import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { routes, screens } from '../navigation/RouteItems';

const CustomDrawer = (props) => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name;
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require('../assets/background.png')}
          style={{ padding: 5 }}
        >
          <Image source={require('../assets/logo.png')} />
        </ImageBackground>
        {routes
          .filter((route) => route.showInDrawer)
          .map((route) => {
            const focusedRoute = routes.find(
              (r) => r.name === currentRouteName
            );
            const focused = focusedRoute
              ? route.name === focusedRoute?.focusedRoute
              : route.name === screens.HomeStack;
            return (
              <DrawerItem
                key={route.name}
                icon={() => (
                  <Image
                    source={route.icon}
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                  />
                )}
                label={() => (
                  <Text
                    style={
                      focused ? styles.drawerLabelFocused : styles.drawerLabel
                    }
                  >
                    {route.title}
                  </Text>
                )}
                onPress={() => props.navigation.navigate(route.name)}
                style={[
                  styles.drawerItem,
                  focused ? styles.drawerItemFocused : null,
                ]}
              />
            );
          })}
      </DrawerContentScrollView>
      <View style={{ borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{ paddingVertical: 15, backgroundColor: 'red' }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}
          >
            <Image
              source={require('../assets/logoutIcon.png')}
              resizeMode="contain"
              style={{ width: 22, height: 22, tintColor: '#fff' }}
            />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 10,
                color: '#fff',
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerLabel: {
    marginLeft: -12,
    fontSize: 15,
    color: '#000000',
  },
  drawerLabelFocused: {
    marginLeft: -12,
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
});
export default CustomDrawer;
