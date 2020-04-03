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
import {Home} from './screens/Home';
import {Endangerment} from './screens/Endangerment';
import {BluetoothNotification} from './screens/BluetoothNotification';
import {SymptomInfo} from './screens/SymptomInfo';
import {DataUpload} from './screens/DataUpload';
import {ConfirmationCode} from './screens/ConfirmationCode';
import {LongPressGestureHandler} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

declare var global: {HermesInternal: null | {}};

const REGENERATE_UUID_MINUTES = 30;
const POLL_DOWNLOAD_API_MINUTES = 60;

const DOWNLOAD_API_BASE_URI = 'https://api.bandemic.app/v0';

const App = () => {
  const [uuid, setUuid] = useState(v4());
  const [downloadedUuids, setDownloadedUuids] = useState([]);
  useEffect(() => {
    BackgroundTimer.runBackgroundTimer(() => {
      setUuid(v4());
    }, REGENERATE_UUID_MINUTES * 60 * 1000);
    BackgroundTimer.runBackgroundTimer(() => {
      fetch(`${DOWNLOAD_API_BASE_URI}/cases?uuid=${v4()}`).then((result) => {
        console.log(result);
      });
    }, POLL_DOWNLOAD_API_MINUTES * 60 * 1000);
    BackgroundTimer.start();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" headerMode={null}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="OnboardingHow" component={OnboardingHow} />
        <Stack.Screen name="Home" component={Home} />
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
        {uuid} ({downloadedUuids.length} others)
      </Text>
    </NavigationContainer>
  );
};

export default App;
