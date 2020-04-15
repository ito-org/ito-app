import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Logo} from './Logo';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

interface HeaderProps {
  showAlpha: boolean;
}

export const Header: React.FC<HeaderProps> = ({showAlpha}) => {
  return (
    <View style={styles.root}>
      <Text>&lt; cancel</Text>
      <Logo showAlpha={showAlpha} />
      <Text>?</Text>
    </View>
  );
};
