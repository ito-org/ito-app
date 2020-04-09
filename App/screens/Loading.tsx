import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import ShieldIcon from '../components/ShieldIcon';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'App/App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#7dc6b6',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 56,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
  },
});

type LoadingBluetoothScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Loading'>

export function Loading({navigation}: {navigation: LoadingBluetoothScreenNavigationProp}) {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Onboarding'), 3000);
  });
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/white_arcs_transparent.png')}
        style={{width: 120, height: 120}}
      />
    </View>
  );
}
export default Loading;
