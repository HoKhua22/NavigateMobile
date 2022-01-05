import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet, View, Image } from 'react-native';

import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import PlantStackNavigator from './stack-navigators/PlantStackNavigator';
import ContactStackNavigator from './stack-navigators/ContactStackNavigator';
import RequisitionStackNavigator from './stack-navigators/RequisitionStackNavigator';
import SiteEventsStack from './stack-navigators/SiteEventsStackNavigator';
import LinkStackNavigator from './stack-navigators/LinkStackNavigator';
import ProfileStackNavigator from './stack-navigators/ProfileStackNavigator';
import { routes, screens } from './RouteItems';

const Tab = createBottomTabNavigator();

const tabOptions = ({ route }) => {
  const item = routes.find((routeItem) => routeItem.name === route.name);

  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
    };
  }

  return {
    tabBarIcon: ({ focused }) => item.icon(focused),
    tabBarLabel: ({ focused }) => (
      <Text style={focused ? styles.tabBarLabel : styles.tabBarLabelInActive}>
        {item.title || ''}
      </Text>
    ),

    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  };
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen
        name={screens.HomeStack}
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={require('../assets/homeIcon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={screens.ProfileStack}
        component={ProfileStackNavigator}
      />
      <Tab.Screen
        name={screens.PlantStack}
        component={PlantStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={require('../assets/settingIcon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={screens.SiteEventsStack}
        component={SiteEventsStack}
        options={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerLeft: (props) => <LogoTitle {...props} />,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={require('../assets/siteIcon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={screens.LinkStack}
        component={LinkStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={require('../assets/linkIcon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={screens.ContactStack}
        component={ContactStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={require('../assets/phone.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              {/* <Text
                style={{
                  color: focused ? '#000000' : '#748c94',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              >
                Contact
              </Text> */}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={screens.RequisitionStack}
        component={RequisitionStackNavigator}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  tabBarLabelInActive: {
    color: '#000000',
    fontSize: 15,
  },
  tabContainer: {
    position: 'absolute',
    bottom: 1,
    elevation: 0,
    backgroundColor: '#ffffff',
    height: 80,
  },
});

export default BottomTabNavigator;
