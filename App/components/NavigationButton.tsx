import React from 'react';
import {
  Text,
  NativeSyntheticEvent,
  NativeTouchEvent,
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
});

interface NavigationButton {
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  title: string;
  style?: object;
  textStyle?: object;
  direction: 'left' | 'right';
}

export const NavigationButton: React.FC<NavigationButton> = ({
  onPress,
  direction,
  title,
  style = {},
  textStyle = {},
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      {direction == 'left' ? <Icon name="chevron-left" size={18} /> : null}
      <Text style={textStyle} onPress={onPress}>
        {' ' + title}
      </Text>
      {direction == 'right' ? <Icon name="chevron-right" size={18} /> : null}
    </View>
  );
};
