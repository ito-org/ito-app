import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import {BasicButton} from '../components/BasicButton';
import {Header} from '../components/Header';
import {AlphaNotice} from '../components/AlphaNotice';

import {global, design} from '../styles';
import {useTranslation} from 'react-i18next';
import {BottomMenu} from '../components/BottomMenu';

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
        navigationButton={{
          title: t('global.cancel'),
          fn: (): void => navigation.goBack(),
        }}
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
          title={t('alphaPositiveResult.buttonTitleReleaseResult')}
          onPress={(): void => navigation.navigate('PositiveResult')}
        />
      </View>
      <BottomMenu navigation={navigation} activate="Infected?"></BottomMenu>
    </View>
  );
};
