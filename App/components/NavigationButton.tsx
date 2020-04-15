import React from 'react';
import {
  Text,
  NativeSyntheticEvent,
  NativeTouchEvent,
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface NavigationButton {
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  title: string;
}
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 12,
    top: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    lineHeight: 15,
  },
});

export const NavigationButton: React.FC<NavigationButton> = ({
  onPress,
  title,
}) => {
  return (
    <View style={styles.wrapper}>
      <Icon name="chevron-left" size={18} />
      <Text style={styles.text} onPress={onPress}>
        {' ' + title}
      </Text>
    </View>
  );
};
