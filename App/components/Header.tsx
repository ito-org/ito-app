import React from 'react';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  View,
} from 'react-native';
import {global, wPercent} from '../styles/style-v3';
import {NavigationButton} from './NavigationButton';

const styles = StyleSheet.create({
  left: {flex: 0.5, justifyContent: 'center'},
  right: {flex: 0.5, justifyContent: 'center'},
  leftButton: {left: wPercent(0.01)},
  rightButton: {right: wPercent(0.01)},
  font: {...global.textSubtitle},
});

interface HeaderProps {
  style?: object;
  leftNavigtion?: {
    title: string;
    fn: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  };
  rightNavigtion?: {
    title: string;
    fn: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  };
}

export const Header: React.FC<HeaderProps> = ({
  leftNavigtion,
  rightNavigtion,
  style = {},
}) => {
  return (
    <View style={[global.row, {flex: 0.05}, style]}>
      <View style={styles.left}>
        {leftNavigtion ? (
          <NavigationButton
            direction="left"
            onPress={leftNavigtion.fn}
            title={leftNavigtion.title}
            style={styles.leftButton}
            textStyle={styles.font}
          />
        ) : null}
      </View>
      <View style={styles.right}>
        {rightNavigtion ? (
          <NavigationButton
            direction="right"
            onPress={rightNavigtion.fn}
            title={rightNavigtion.title}
            style={styles.rightButton}
            textStyle={styles.font}
          />
        ) : null}
      </View>
    </View>
  );
};
export default Header;
