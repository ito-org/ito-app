import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import {BasicButton} from '../components/BasicButton';
import {Header} from '../components/Header';
import {AlphaNotice} from '../components/AlphaNotice';

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
    textAlign: 'left',
    paddingTop: 36,
    paddingBottom: 64,
    ...design.explanation,
    fontSize: 18,
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

export const AlphaPositiveResult: React.FC<{
  navigation: AlphaPositiveResultScreenNavigationProp;
}> = ({navigation}) => {
  return (
    <View style={[global.container, styles.container]}>
      <Header
        showNavigate={true}
        navigateTitle="cancel"
        onNavigate={(): void => navigation.goBack()}
        showHelp={true}
        showAlpha={false}
      />

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
          onPress={(): void => navigation.navigate('ConfirmationCode')}
        />
      </View>
    </View>
  );
};
