import React from 'react';
import {Text, View, StyleSheet, Linking} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import Header from '../components/Header';
import {design} from '../styles/index';
import {BasicButton} from '../components/BasicButton';
import {useTranslation} from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  explanation: {
    padding: 5,
    paddingTop: 64,
    paddingBottom: 50,
    lineHeight: 26,
    ...design.explanation,
  },
  titleButtonLayout: {
    marginBottom: 48,
    marginLeft: 8,
    marginRight: 8,
  },
  normalButtonLayout: {
    margin: 8,
  },
});

type SymptomInfoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SymptomInfo'
>;

export const SymptomInfo: React.FC<{
  navigation: SymptomInfoScreenNavigationProp;
}> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Header
        navigationButton={{
          title: t('global.cancel'),
          fn: (): void => navigation.goBack(),
        }}
      />
      <Text style={styles.explanation}>{t('symptomInfo.explanation')}</Text>
      <BasicButton
        buttonStyle={styles.titleButtonLayout}
        title={t('symptomInfo.buttonTitleOpenDesignatedApp')}
        onPress={(): Promise<void> =>
          Linking.openURL(t('symptomInfo.selfTestUrl'))
        }
      />
      <BasicButton
        variant="outlined"
        buttonStyle={styles.normalButtonLayout}
        title={t('symptomInfo.buttonTitleNotInfected')}
        onPress={(): void => navigation.navigate('HomeBluetooth')}
      />
      <BasicButton
        variant="outlined"
        buttonStyle={styles.normalButtonLayout}
        title={t('symptomInfo.buttonTitlePositiveTest')}
        onPress={(): void => navigation.navigate('AlphaPositiveResult')}
      />
    </View>
  );
};
