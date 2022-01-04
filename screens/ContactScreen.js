import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Contact Screen</Text>
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
export default ContactScreen;
