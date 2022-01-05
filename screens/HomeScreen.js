import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native';
// import Header from '../components/Header';
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      {/* <Header title="Home" /> */}
      <View>
        <Button
          title="Go to Profile Screen"
          onPress={() => {
            navigation.navigate('HomeTab', {
              screen: 'ProfileStack',
              params: {
                screen: 'Profile',
                params: {
                  name: 'Nguyen Pham',
                  email: 'test@gmail.com',
                  employed: 'Caobech Pty Ltd',
                },
              },
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default HomeScreen;
