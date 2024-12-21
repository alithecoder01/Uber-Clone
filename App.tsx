import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {AmplifyConfiguration} from './amplify/config'; // Ensure this file exists and is correct
import AppStack from './src/stack/AppStack';

AmplifyConfiguration();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <AppStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
