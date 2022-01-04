import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SiteEventsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Site Events Screen</Text>
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
export default SiteEventsScreen;
