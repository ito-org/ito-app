import React from 'react';
import {StyleSheet, NativeTouchEvent, NativeSyntheticEvent} from 'react-native';
import {Button} from 'react-native-elements';

const designStyles = {
  titleFilled: {
    color: '#595959',
  },
  titleOutlined: {
    color: '#2c2c2c',
  },
  buttonFilled: {
    backgroundColor: '#91e6d3',
  },
  buttonOutlined: {
    backgroundColor: '#fff',
  },
};

const styles = StyleSheet.create({
  buttonTitle: {
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
  button: {
    borderRadius: 6,
    borderColor: '#91e6d3',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

interface BasicButtonProps {
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  title: string;
  variant?: 'filled' | 'outlined';
  textStyle?: object;
  buttonStyle?: object;
}

const VARIANT_SUFFIXES = {
  filled: 'Filled',
  outlined: 'Outlined',
};

export const BasicButton: React.FC<BasicButtonProps> = ({
  onPress,
  title,
  variant = 'filled',
  textStyle: titleStyleProp = {},
  buttonStyle: buttonStyleProp = {},
  ...other
}) => {
  const variantSuffix = VARIANT_SUFFIXES[variant];
  const buttonStyle = {
    ...styles.button,
    ...designStyles[`button${variantSuffix}`],
    ...buttonStyleProp,
  };
  const titleStyle = {
    ...styles.buttonTitle,
    ...designStyles[`title${variantSuffix}`],
    ...titleStyleProp,
  };
  return (
    <Button
      title={title}
      onPress={onPress}
      titleStyle={titleStyle}
      buttonStyle={buttonStyle}
      {...other}
    />
  );
};
export default BasicButton;
