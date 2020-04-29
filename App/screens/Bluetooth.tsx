import React from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';

type BluetoothScreenProp = StackNavigationProp<RootStackParamList, 'Bluetooth'>;

export const Bluetooth: React.FC<{navigation: BluetoothScreenProp}> = ({
  navigation,
}) => {
  navigation.navigate('Home'); // TODO: check if bluetooth is allowed and activated and do the nav to 'Home'
  return <View></View>;
};
