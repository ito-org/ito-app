import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import {BasicButton} from '../components/BasicButton';
import {AlphaNotice} from '../components/AlphaNotice';
import Icon from 'react-native-vector-icons/Feather';
import {Logo} from '../components/Logo';

import {global, design} from '../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  cancel: {
    position: 'absolute',
    left: 12,
    top: 12,
  },
  logoWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
  logo: design.logo,
  alphaNoticeRoot: {marginLeft: 'auto', marginRight: 'auto', margin: 16},
  alphaNoticeText: {fontSize: 30},
  explanation: {
    textAlign: 'center',
    paddingTop: 12,
    paddingBottom: 38,
    ...design.explanation,
  },
  buttonContainer: {
    marginBottom: 16,
  },
});

type AlphaPositiveResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AlphaPositiveResult'
>;

export function AlphaPositiveResult({
  navigation,
}: {
  navigation: AlphaPositiveResultScreenNavigationProp;
}) {
  return (
    <View style={[global.container, styles.container]}>
      <View style={styles.cancel}>
        <Text onPress={() => navigation.navigate('Endangerment')}>
          <Icon name="chevron-left" size={18} style={styles.chevronLeftIcon} />{' '}
          cancel
        </Text>
      </View>
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>ito</Text>
      </View>
      <AlphaNotice
        rootStyle={styles.alphaNoticeRoot}
        textStyle={styles.alphaNoticeText}
      />
      <Text style={styles.explanation}>
        For testing purposes you can simulate a positive test result. After
        pressing the button, your phone's TCNs will be marked as positive and
        uploaded to the server.{'\n'}
        {'\n'}
        Every ito user now at risk of an infection will be notified.
      </Text>
      <View style={styles.buttonContainer}>
        <BasicButton
          title="Release positive test result"
          onPress={() => navigation.navigate('ConfirmationCode')}
        />
      </View>
    </View>
  );
}
