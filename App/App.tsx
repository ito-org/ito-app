/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect} from 'react';
import 'react-native-get-random-values';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Loading} from './screens/Loading';
import {AlphaWarning} from './screens/AlphaWarning';
import {Onboarding} from './screens/Onboarding';
import {OnboardingHow} from './screens/OnboardingHow';
import {HomeBluetooth} from './screens/HomeBluetooth';
import {HomeTour} from './screens/HomeTour';
import {Endangerment} from './screens/Endangerment';
import {BluetoothNotification} from './screens/BluetoothNotification';
import {SymptomInfo} from './screens/SymptomInfo';
import {DataUpload} from './screens/DataUpload';
import {ConfirmationCode} from './screens/ConfirmationCode';
import {AlphaPositiveResult} from './screens/AlphaPositiveResult';
import AsyncStorage from '@react-native-community/async-storage'; // eslint-disable-line @typescript-eslint/no-unused-vars

const Stack = createStackNavigator();

export type RootStackParamList = {
  Loading: undefined;
  AlphaWarning: undefined;
  Onboarding: undefined;
  OnboardingHow: undefined;
  HomeTour: undefined;
  HomeBluetooth: undefined;
  Endangerment: undefined;
  BluetoothNotification: undefined;
  SymptomInfo: undefined;
  ConfirmationCode: undefined;
  DataUpload: undefined;
};

declare const global: {HermesInternal: null | {}};

const App = () => {
  useEffect(() => {
    // Uncomment this to show onboarding again
    // AsyncStorage.setItem('userHasSeenOnboarding', 'false');
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" headerMode="none">
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="AlphaWarning" component={AlphaWarning} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="OnboardingHow" component={OnboardingHow} />
        <Stack.Screen name="HomeTour" component={HomeTour} />
        <Stack.Screen name="HomeBluetooth" component={HomeBluetooth} />
        <Stack.Screen name="Endangerment" component={Endangerment} />
        <Stack.Screen
          name="BluetoothNotification"
          component={BluetoothNotification}
        />

        <Stack.Screen name="SymptomInfo" component={SymptomInfo} />
        <Stack.Screen
          name="AlphaPositiveResult"
          component={AlphaPositiveResult}
        />
        <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
        <Stack.Screen name="DataUpload" component={DataUpload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
