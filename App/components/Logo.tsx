import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AlphaNotice} from './AlphaNotice';

const styles = StyleSheet.create({
  logoWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logo: {
    color: '#7dc6b6',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
    marginBottom: 16,
  },
  alphaNoticeRoot: {
    position: 'absolute',
    left: 48,
    top: 12,
  },
  alphaNoticeText: {
    fontSize: 14,
    lineHeight: 14,
  },
});

export const Logo: React.FC = () => {
  return (
    <View style={styles.logoWrapper}>
      <Text style={styles.logo}>ito</Text>
      <AlphaNotice
        rootStyle={styles.alphaNoticeRoot}
        textStyle={styles.alphaNoticeText}
      />
    </View>
  );
};
