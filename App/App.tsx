/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useState, useEffect} from 'react';
import BackgroundTimer from 'react-native-background-timer';
import {Text} from 'react-native';
import 'react-native-get-random-values';
import {v4} from 'uuid';
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

const REGENERATE_UUID_MINUTES = 30;

const App = () => {
  const [uuid, setUuid] = useState(v4());
  useEffect(() => {
    BackgroundTimer.runBackgroundTimer(() => {
      setUuid(v4());
    }, REGENERATE_UUID_MINUTES * 60 * 1000);
    BackgroundTimer.start();
  }, []);
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
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          textAlign: 'center',
          color: 'white',
          backgroundColor: '#444',
          padding: 4,
        }}>
        Your ID: {uuid}
      </Text>
    </NavigationContainer>
  );
};

export default App;
