import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to Profile Screen"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('ProfileStack', {
            name: 'Nguyen Pham',
            email: 'nguyen.pham@acciona.com',
            employed: 'Caobech Pty Ltd',
          });
        }}
      />
    </View>
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
