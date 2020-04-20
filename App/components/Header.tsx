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
import {useNavigation} from '@react-navigation/native';

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
    minWidth: 56,
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
  navigationButton?: {
    title: string;
    fn: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  };
}

export const Header: React.FC<HeaderProps> = ({
  showAlpha = true,
  showHelp = false,
  navigationButton,
  style = {},
}) => {
  const {navigate} = useNavigation();

  return (
    <View style={[styles.root, style]}>
      {navigationButton ? (
        <NavigationButton
          onPress={navigationButton.fn}
          title={navigationButton.title}
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
        <Icon
          style={styles.questionMark}
          name="help-circle"
          size={24}
          onPress={() => navigate('Onboarding')}
        />
      ) : null}
    </View>
  );
};
export default Header;
