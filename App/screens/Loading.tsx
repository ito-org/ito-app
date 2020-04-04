import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import ShieldIcon from '../components/ShieldIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#4770e0',
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

export function Loading({navigation}) {
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
