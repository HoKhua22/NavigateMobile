import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
  const { name } = route.params;
  const { email } = route.params;
  const { employed } = route.params;
  return (
    <>
      <View style={[styles.card, styles.cardContent]}>
        <Text>Name</Text>
        <Text style={{ marginLeft: 15 }}>{name}</Text>
      </View>
      <View style={[styles.card, styles.cardContent]}>
        <Text>Email</Text>
        <Text style={{ marginLeft: 15 }}>{email}</Text>
      </View>
      <View style={[styles.card, styles.cardContent]}>
        <Text>Employed</Text>
        <Text style={{ marginLeft: 15 }}>{employed}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 4,
    padding: 10,
  },
  cardContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ProfileScreen;
