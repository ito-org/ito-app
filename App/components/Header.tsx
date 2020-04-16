import React from 'react';
import {
  View,
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {NavigationButton} from './NavigationButton';
import {Logo} from './Logo';
import {AlphaNotice} from './AlphaNotice';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navigationButton: {},
  logoWrapper: {marginLeft: 'auto', marginRight: 'auto'},
  logo: {padding: 0},
  questionMark: {},
  alphaNoticeRoot: {
    position: 'absolute',
    top: '25%',
    right: -60,
    minWidth: 52,
  },
  alphaNoticeText: {
    fontSize: 14,
    lineHeight: 14,
  },
});

interface HeaderProps {
  showAlpha?: boolean;
  showHelp?: boolean;
  style?: object;
  navigation?: {
    title: string;
    fn: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  };
}

export const Header: React.FC<HeaderProps> = ({
  showAlpha = true,
  showHelp = false,
  navigation,
  style = {},
}) => {
  return (
    <View style={[styles.root, style]}>
      {navigation ? (
        <NavigationButton
          onPress={navigation.fn}
          title={navigation.title}
          style={styles.navigationButton}
        />
      ) : null}
      <View style={styles.logoWrapper}>
        <Logo textStyle={styles.logo} />
        {showAlpha ? (
          <AlphaNotice
            rootStyle={styles.alphaNoticeRoot}
            textStyle={styles.alphaNoticeText}
          />
        ) : null}
      </View>
      {showHelp ? (
        <Icon style={styles.questionMark} name="help-circle" size={24} />
      ) : null}
    </View>
  );
};
export default Header;
