/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect, Suspense} from 'react';
import 'react-native-get-random-values';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Loading} from './screens/Loading';
import AsyncStorage from '@react-native-community/async-storage'; // eslint-disable-line @typescript-eslint/no-unused-vars
import {Home} from './screens/Home';
import {Bluetooth} from './screens/Bluetooth';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Loading: undefined;
  Bluetooth: undefined;
  Home: undefined;
};

declare const global: {HermesInternal: null | {}};

export const App: React.FC<void> = () => {
  useEffect(() => {
    // Uncomment this to show onboarding again
    // AsyncStorage.setItem('userHasSeenOnboarding', 'false');
  });

  return (
    <Suspense fallback={null}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loading" headerMode="none">
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Bluetooth" component={Bluetooth} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
};

export default App;
