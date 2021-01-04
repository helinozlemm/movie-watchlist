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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Root from './src/Root';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Root />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});

export default App;
