import React from 'react';
import {View, StyleSheet, Text, Linking} from 'react-native';
import {Button} from 'react-native-elements';
import {RootStackParamList} from 'App/App';
import {StackNavigationProp} from '@react-navigation/stack';
import AlphaNotice from '../components/AlphaNotice';
import {useTranslation} from 'react-i18next';

type AlphaWarningScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AlphaWarning'
>;

interface AlphaWarningProps {
  navigation: AlphaWarningScreenNavigationProp;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  logoWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logo: {
    color: '#7dc6b6',
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
  },
  subtitle: {
    color: '#595959',
    fontSize: 18,
    fontWeight: '300',
    paddingTop: 12,
    paddingBottom: 8,
    textAlign: 'center',
    fontFamily: 'Ubuntu-L',
  },
  generalText: {
    color: '#595959',
    fontSize: 18,
    paddingTop: 16,
    textAlign: 'center',
    fontFamily: 'UbuntuMono-R',
  },
  githubLink: {
    textDecorationLine: 'underline',
  },
  alphaNoticeRoot: {marginLeft: 'auto', marginRight: 'auto', margin: 16},
  alphaNoticeText: {fontSize: 60},
  bottomButtonContainer: {
    marginBottom: 16,
  },
  buttonHow: {
    backgroundColor: '#91e6d3',
    borderRadius: 6,
  },
  buttonHowTitle: {
    color: '#2c2c2c',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
});

export const AlphaWarning: React.FC<AlphaWarningProps> = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>ito</Text>
        <Text style={styles.subtitle}>track infections, not people!</Text>
        <AlphaNotice
          rootStyle={styles.alphaNoticeRoot}
          textStyle={styles.alphaNoticeText}
        />
      </View>
      <View>
        <Text style={styles.generalText}>{t('alphaWarning.demoPurpose')}</Text>
        <Text style={styles.generalText}>
          {t('alphaWarning.notFullyImplemented')}
        </Text>
        <Text style={styles.generalText}>{t('alphaWarning.review')}</Text>
      </View>
      <Text
        style={[styles.generalText, styles.githubLink]}
        onPress={(): Promise<void> =>
          Linking.openURL('https://github.com/ito-org/react-native-app/issues')
        }>
        https://github.com/ito-org/react-native-app/issues
      </Text>
      <View style={styles.bottomButtonContainer}>
        <Button
          title="ok, let´s start"
          onPress={(): void => navigation.navigate('Onboarding')}
          titleStyle={styles.buttonHowTitle}
          buttonStyle={styles.buttonHow}
        />
      </View>
    </View>
  );
};
