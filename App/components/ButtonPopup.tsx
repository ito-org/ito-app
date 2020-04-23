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
  text: {
    color: '#595959',
    fontFamily: 'Ubuntu-R',
    paddingBottom: 30,
  },
  info: {
    backgroundColor: 'rgba(135, 202, 187, 0.2)',
  },
  infoButton: {
    backgroundColor: '#91e6d3',
  },
  infoButtonText: {
    color: '#595959',
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
      <Text style={styles.text}>{children}</Text>
      <View style={{alignItems: 'flex-end'}}>
        <Button
          buttonStyle={(styles.button, buttonColoring)}
          titleStyle={styles.infoButtonText}
          title={button.title}
          onPress={() => button.fn()}
        />
      </View>
    </View>
  );
};
