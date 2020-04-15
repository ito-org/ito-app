import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import {BasicButton} from '../components/BasicButton';
import {Header} from '../components/Header';

import {global} from '../styles';

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
  logo: {
    color: '#7dc6b6',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
    marginBottom: 16,
  },
  alphaNoticeRoot: {marginLeft: 'auto', marginRight: 'auto', margin: 16},
  alphaNoticeText: {fontSize: 30},
  explanation: {
    color: '#595959',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 38,
    fontFamily: 'UbuntuMono-R',
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
      <Header />
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
