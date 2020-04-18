import React from 'react';
import {Text, View, StyleSheet, NativeModules} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import {BasicButton} from '../components/BasicButton';
import {Header} from '../components/Header';
import {AlphaNotice} from '../components/AlphaNotice';

import {global, design} from '../styles';
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation();

  return (
    <View style={[global.container, styles.container]}>
      <Header
        navigation={{
          title: 'cancel',
          fn: (): void => navigation.goBack(),
        }}
        showHelp={true}
        showAlpha={false}
      />

      <AlphaNotice
        rootStyle={styles.alphaNoticeRoot}
        textStyle={styles.alphaNoticeText}
      />
      <Text style={styles.explanation}>
        {t('alphaPositiveResult.testingPurposes')}
      </Text>
      <View style={styles.buttonContainer}>
        <BasicButton
          title="Release positive test result"
          onPress={(): void => {
            const now = Date.now() / 1000;
            const sevenDaysAgo = now - 7 * 24 * 60 * 60;
            NativeModules.ItoBluetooth.publishBeaconUUIDs(
              sevenDaysAgo,
              now,
              (...argss) => {
                console.log('uploaded', argss);
              },
            );
            navigation.navigate('DataUpload');
          }}
        />
      </View>
    </View>
  );
};
