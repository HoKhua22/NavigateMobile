import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LinkScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Link Screen</Text>
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
export default LinkScreen;
