import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Realm from 'realm';

const app = new Realm.App({id: 'urbionsmartdemo-cwlygrp'}); // Replace with your Realm app ID

export default function HomeScreen({navigation}) {
  const handleLogout = async () => {
    try {
      await app.currentUser.logOut();
      navigation.navigate('Login');
    } catch (err) {
      console.error('Failed to log out', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
