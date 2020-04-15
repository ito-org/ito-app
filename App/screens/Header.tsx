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
import {HeaderStyleInterpolators} from '@react-navigation/stack';

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
  hidden: {
    display: 'none',
  },
});

interface HeaderProps {
  showAlpha?: boolean;
  showNavigate?: boolean;
  showHelp?: boolean;
  onNavigate?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  navigateTitle?: string;
  style?: object;
}

export const Header: React.FC<HeaderProps> = ({
  showAlpha = true,
  showNavigate = false,
  showHelp = false,
  onNavigate,
  navigateTitle = '',
  style = {},
}) => {
  return (
    <View style={[styles.root, style]}>
      {showNavigate ? (
        <NavigationButton
          onPress={
            /* eslint-disable @typescript-eslint/no-non-null-assertion */
            onNavigate!
          }
          title={navigateTitle}
          style={styles.navigationButton}
        />
      ) : null}
      <View style={styles.logoWrapper}>
        <Logo rootStyle={styles.logo} />
        <AlphaNotice
          rootStyle={[styles.alphaNoticeRoot, showAlpha ? {} : styles.hidden]}
          textStyle={[styles.alphaNoticeText, showAlpha ? {} : styles.hidden]}
        />
      </View>
      {showHelp ? (
        <Icon style={styles.questionMark} name="help-circle" size={24} />
      ) : null}
    </View>
  );
};
export default Header;
