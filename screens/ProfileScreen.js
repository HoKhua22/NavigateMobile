import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
  const { name } = route.params;
  const { email } = route.params;
  const { employed } = route.params;
  console.log(route);
  console.log(route.params);

  return (
    <View style={styles.center}>
      <Text>{JSON.stringify(name)}</Text>
      <Text>{JSON.stringify(email)}</Text>
      <Text>{JSON.stringify(employed)}</Text>
      <Text>This is the profile screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
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

export default ProfileScreen;
