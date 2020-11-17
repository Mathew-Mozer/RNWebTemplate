/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Router} from './routing';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>test</Text>
        <Router></Router>
      </View>
    </>
  );
};

export default App;
