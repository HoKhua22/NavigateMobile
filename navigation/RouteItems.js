import * as React from 'react';

export const screens = {
  HomeTab: 'HomeTab',
  HomeStack: 'HomeStack',
  Home: 'Home',
  PlantStack: 'PlantStack',
  Plant: 'Plant',
  ProfileStack: 'ProfileStack',
  Profile: 'Profile',
  SiteEventsStack: 'SiteEventsStack',
  SiteEvents: 'Site Events',
  LinkStack: 'LinkStack',
  Link: 'Link',
  ContactStack: 'ContactStack',
  Contact: 'Contact',
  RequisitionStack: 'RequisitionStack',
  Requisition: 'Requisition',
};

export const routes = [
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'Home',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />
    ),
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    icon: require('../assets/homeIcon.png'),
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: require('../assets/homeIcon.png'),
  },

  {
    name: screens.ProfileStack,
    focusedRoute: screens.ProfileStack,
    title: 'Profile',
    showInTab: false,
    showInDrawer: true,
    icon: require('../assets/userIcon.png'),
  },
  {
    name: screens.Profile,
    focusedRoute: screens.ProfileStack,
    title: 'Profile',
    showInTab: false,
    showInDrawer: false,
    icon: require('../assets/userIcon.png'),
  },
  {
    name: screens.SiteEventsStack,
    focusedRoute: screens.SiteEventsStack,
    title: 'Site Events',
    showInTab: true,
    showInDrawer: true,
    icon: require('../assets/siteIcon.png'),
  },
  {
    name: screens.SiteEvents,
    focusedRoute: screens.SiteEventsStack,
    title: 'Site Events',
    showInTab: false,
    showInDrawer: false,
    icon: require('../assets/siteIcon.png'),
  },
  {
    name: screens.RequisitionStack,
    focusedRoute: screens.RequisitionStack,
    title: 'My Requisitions',
    showInTab: false,
    showInDrawer: true,
    icon: require('../assets/heartIcon.png'),
  },
  {
    name: screens.Requisition,
    focusedRoute: screens.RequisitionStack,
    title: 'My Requisitions',
    showInTab: false,
    showInDrawer: false,
    icon: require('../assets/heartIcon.png'),
  },
  {
    name: screens.PlantStack,
    focusedRoute: screens.PlantStack,
    title: 'Plant',
    showInTab: true,
    showInDrawer: false,
    icon: require('../assets/settingIcon.png'),
  },

  {
    name: screens.Plant,
    focusedRoute: screens.PlantStack,
    title: 'Plant',
    showInTab: true,
    showInDrawer: false,
    icon: require('../assets/settingIcon.png'),
  },

  {
    name: screens.LinkStack,
    focusedRoute: screens.LinkStack,
    title: 'Link',
    showInTab: true,
    showInDrawer: false,
    icon: require('../assets/linkIcon.png'),
  },

  {
    name: screens.Link,
    focusedRoute: screens.LinkStack,
    title: 'Link',
    showInTab: true,
    showInDrawer: false,
    icon: require('../assets/linkIcon.png'),
  },

  {
    name: screens.ContactStack,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: true,
    showInDrawer: true,
    icon: require('../assets/phone.png'),
  },
  {
    name: screens.Contact,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: false,
    showInDrawer: false,
    icon: require('../assets/phone.png'),
  },
];
