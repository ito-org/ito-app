import React from 'react';
import {StyleSheet, NativeTouchEvent, NativeSyntheticEvent} from 'react-native';
import {Button} from 'react-native-elements';

const styles = StyleSheet.create({
  bottomButtonContainer: {
    marginBottom: 16,
  },
  buttonHow: {
    backgroundColor: '#91e6d3',
    borderRadius: 6,
  },
  buttonHowTitle: {
    color: '#2c2c2c',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
});

interface BasicButtonProps {
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  title: string;
}

export const BasicButton: React.FC<BasicButtonProps> = ({onPress, title}) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      titleStyle={styles.buttonHowTitle}
      buttonStyle={styles.buttonHow}
    />
  );
};
