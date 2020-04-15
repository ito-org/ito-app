import React from 'react';
import {StyleSheet, NativeTouchEvent, NativeSyntheticEvent} from 'react-native';
import {Button} from 'react-native-elements';

const corporateButtonStyles = {
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
  styleVariant?: 'filled' | 'outlined';
  textStyle?: any;
  buttonStyle?: any;
}

export const BasicButton: React.FC<BasicButtonProps> = ({
  onPress,
  title,
  styleVariant,
  textStyle = {},
  buttonStyle = {},
}) => {
  let mButtonStyle = {...styles.button, ...buttonStyle};
  let mButtonTitleStyle = {...styles.buttonTitle, ...textStyle};

  if (styleVariant === 'filled') {
    mButtonTitleStyle = {
      ...mButtonTitleStyle,
      ...corporateButtonStyles.titleFilled,
    };
    mButtonStyle = {...mButtonStyle, ...corporateButtonStyles.buttonFilled};
  } else {
    mButtonTitleStyle = {
      ...mButtonTitleStyle,
      ...corporateButtonStyles.titleOutlined,
    };
    mButtonStyle = {
      ...mButtonStyle,
      ...corporateButtonStyles.buttonOutlined,
    };
  }

  return (
    <Button
      title={title}
      onPress={onPress}
      titleStyle={mButtonTitleStyle}
      buttonStyle={mButtonStyle}
    />
  );
};
