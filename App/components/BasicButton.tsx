import React from 'react';
import {StyleSheet, NativeTouchEvent, NativeSyntheticEvent} from 'react-native';
import {Button} from 'react-native-elements';

const corporateButtonStyles = {
  textFilled: {
    color: '#595959',
  },
  textTransparent: {
    color: '#2c2c2c',
  },
  buttonFilled: {
    backgroundColor: '#91e6d3',
  },
  buttonTransparent: {
    backgroundColor: '#fff',
  },
};

const styles = StyleSheet.create({
  buttonText: {
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
  styleType: 'title' | 'normal';
  textStyle?: any;
  buttonStyle?: any;
}

export const BasicButton: React.FC<BasicButtonProps> = ({
  onPress,
  title,
  styleType,
  textStyle,
  buttonStyle,
}) => {
  let mButtonStyle = styles.button;
  let mButtonTextStyle = styles.buttonText;
  if (buttonStyle != undefined)
    mButtonStyle = {...styles.button, ...buttonStyle};
  if (textStyle != undefined)
    mButtonTextStyle = {...styles.buttonText, ...textStyle};

  if (styleType === 'title') {
    mButtonTextStyle = {
      ...mButtonTextStyle,
      ...corporateButtonStyles.textFilled,
    };
    mButtonStyle = {...mButtonStyle, ...corporateButtonStyles.buttonFilled};
  } else {
    mButtonTextStyle = {
      ...mButtonTextStyle,
      ...corporateButtonStyles.textTransparent,
    };
    mButtonStyle = {
      ...mButtonStyle,
      ...corporateButtonStyles.buttonTransparent,
    };
  }

  return (
    <Button
      title={title}
      onPress={onPress}
      titleStyle={mButtonTextStyle}
      buttonStyle={mButtonStyle}
    />
  );
};
