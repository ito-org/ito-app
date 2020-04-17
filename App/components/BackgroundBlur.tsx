import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blur: {
    backgroundColor: 'black',
    opacity: 0.5,
  },
});

interface BlurBackgroundProps {
  children: React.ReactNode;
}

export const BlurBackground: React.FC<BlurBackgroundProps> = ({children}) => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.blur, styles.wrapper]} />
      {children}
    </View>
  );
};
