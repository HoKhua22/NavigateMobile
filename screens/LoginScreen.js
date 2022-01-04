import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('../assets/userIcon.png')}
        style={{
          tintColor: 'blue',
          height: 100,
          width: 100,
          alignContent: 'center',
        }}
      />
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          underlineColorAndroid="transparent"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}> Login </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelText: {
    color: '#000000',
    fontSize: 15,
  },
  input: {
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    width: 300,
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;
