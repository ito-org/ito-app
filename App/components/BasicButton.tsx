import React from 'react';
import {StyleSheet, NativeTouchEvent, NativeSyntheticEvent} from 'react-native';
import {Button} from 'react-native-elements';
import {
  wPercent,
  hPercent,
  textColors,
  buttonColors,
  colors,
} from '../styles/style-v3';

const designStyles = {
  titleFilled: {
    color: textColors.main,
  },
  titleOutlined: {
    color: textColors.main,
  },
  titleTextOnly: {
    color: textColors.light,
  },
  buttonFilled: {
    backgroundColor: buttonColors.bg,
  },
  buttonOutlined: {
    backgroundColor: buttonColors.bg,
  },
  buttonTextOnly: {
    backgroundColor: colors.transparent,
    borderWidth: 0,
  },
};

const styles = StyleSheet.create({
  buttonTitle: {
    letterSpacing: 1,
    fontSize: hPercent(0.019),
    fontFamily: 'Ubuntu',
  },
  button: {
    borderRadius: 6,
    borderColor: buttonColors.bg,
    borderStyle: 'solid',
    borderWidth: 1,
    width: wPercent(0.634375),
    height: hPercent(0.077),
    left: wPercent(1) / 2 - wPercent(0.634375) / 2,
  },
});

interface BasicButtonProps {
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  title: string;
  variant?: 'filled' | 'outlined' | 'textOnly';
  textStyle?: object;
  buttonStyle?: object;
}

const VARIANT_SUFFIXES = {
  filled: 'Filled',
  outlined: 'Outlined',
  textOnly: 'TextOnly',
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
