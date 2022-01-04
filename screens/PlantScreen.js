import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlantScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Plant Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
export default PlantScreen;
