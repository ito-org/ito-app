/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Onboarding } from './screens/Onboarding';
import { Overview } from './screens/Overview';
import { Endagerment } from './screens/Endangerment';
import { BluetoothNotification } from './screens/BluetoothNotification';

const Stack = createStackNavigator();

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Endangerment" component={Endagerment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
