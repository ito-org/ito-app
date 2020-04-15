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
  style?: object;
}

export const Logo: React.FC<LogoProps> = ({style = {}}) => {
  return (
    <View style={[styles.root, style]}>
      <Text style={styles.logo}>ito</Text>
    </View>
  );
};
export default Logo;
