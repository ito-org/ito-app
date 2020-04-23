import React, {useState, ReactNode} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    alignItems: 'flex-end',
    bottom: 5,
    width: 10,
  },
  info: {
    backgroundColor: 'red',
    height: 160,
  },
  infoButton: {
    backgroundColor: 'red',
    height: 160,
  },
});

interface ButtonPopupProps {
  children: ReactNode;
  button: {
    fn: () => void;
    title: string;
  };
  style?: object;
}

export const ButtonPopup: React.FC<ButtonPopupProps> = ({
  children,
  button,
  style,
}) => {
  const buttonColoring = styles.infoButton;
  const textColoring = styles.info;
  return (
    <View style={[styles.container, textColoring, style]}>
      <Text>{children}</Text>
      <View style={{alignItems: 'flex-end'}}>
        <Button
          style={(styles.button, buttonColoring)}
          title={button.title}
          onPress={() => button.fn()}
        />
      </View>
    </View>
  );
};
