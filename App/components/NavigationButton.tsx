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
  },
  text: {
    lineHeight: 15,
  },
});

interface NavigationButton {
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  title: string;
  style?: object;
}

export const NavigationButton: React.FC<NavigationButton> = ({
  onPress,
  title,
  style = {},
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Icon name="chevron-left" size={18} />
      <Text style={styles.text} onPress={onPress}>
        {' ' + title}
      </Text>
    </View>
  );
};
