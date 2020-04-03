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
import {Onboarding} from './screens/Onboarding';
import {OnboardingHow} from './screens/OnboardingHow';
import {Overview} from './screens/Overview';
import {Endangerment} from './screens/Endangerment';
import {BluetoothNotification} from './screens/BluetoothNotification';
import {SymptomInfo} from './screens/SymptomInfo';
import {DataUpload} from './screens/DataUpload';
import {ConfirmationCode} from './screens/ConfirmationCode';

const Stack = createStackNavigator();

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" headerMode={null}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="OnboardingHow" component={OnboardingHow} />
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Endangerment" component={Endangerment} />
        <Stack.Screen
          name="BluetoothNotification"
          component={BluetoothNotification}
        />

        <Stack.Screen name="SymptomInfo" component={SymptomInfo} />
        <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
        <Stack.Screen name="DataUpload" component={DataUpload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
