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
import 'react-native-get-random-values';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Loading} from './screens/Loading';
import {Onboarding} from './screens/Onboarding';
import {OnboardingHow} from './screens/OnboardingHow';
import {Home} from './screens/Home';
import {HomeBluetooth} from './screens/HomeBluetooth';
import {HomeTour1} from './screens/HomeTour1';
import {HomeTour2} from './screens/HomeTour2';
import {Endangerment} from './screens/Endangerment';
import {BluetoothNotification} from './screens/BluetoothNotification';
import {SymptomInfo} from './screens/SymptomInfo';
import {DataUpload} from './screens/DataUpload';
import {ConfirmationCode} from './screens/ConfirmationCode';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Loading: undefined;
  Onboarding: undefined;
  OnboardingHow: undefined;
  HomeTour1: undefined;
  HomeTour2: undefined;
  Home: undefined;
  HomeBluetooth: undefined;
  Endangerment: undefined;
  BluetoothNotification: undefined;
  SymptomInfo: undefined;
  ConfirmationCode: undefined;
  DataUpload: undefined;
};

declare const global: {HermesInternal: null | {}};

const App = () => {
  //Uncomment this to show onboarding again
  //AsyncStorage.setItem('userHasSeenOnboarding', "false");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" headerMode="none">
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="OnboardingHow" component={OnboardingHow} />
        <Stack.Screen name="HomeTour1" component={HomeTour1} />
        <Stack.Screen name="HomeTour2" component={HomeTour2} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeBluetooth" component={HomeBluetooth} />
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
