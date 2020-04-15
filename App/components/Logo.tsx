import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {padding: 2},
  logo: {
    color: '#7dc6b6',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
  },
});

interface LogoProps {
  rootStyle?: object;
  textStyle?: object;
}

export const Logo: React.FC<LogoProps> = ({rootStyle = {}, textStyle = {}}) => {
  return (
    <View style={[styles.root, rootStyle]}>
      <Text style={[styles.logo, textStyle]}>ito</Text>
    </View>
  );
};
export default Logo;
