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

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  PanResponder,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TestHomeScreen"
          component={TestHomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="StackedInstructions" component={StackedInstructions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function TestHomeScreen({navigation}){
  return (
    <>
      <Text>
        Reload Instructions
      </Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Show SomeInstructions" onPress={() => navigation.navigate("StackedInstructions")}></Button>
      </View>
    </>
  );
}

function StackedInstructions({navigation}){
  return (
    <>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Debug Instructions</Text>
      <ReloadInstructions></ReloadInstructions>
      
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Reload Instructions</Text>
      <DebugInstructions></DebugInstructions>
    </>
  );
}

export default App;
