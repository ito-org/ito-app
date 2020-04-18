import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  PermissionsAndroid,
  NativeModules,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ShieldIcon2 from '../components/ShieldIcon2';
import {Header} from '../components/Header';
import {RootStackParamList} from 'App/App';
import {StackNavigationProp} from '@react-navigation/stack';
import {BasicButton} from '../components/BasicButton';

import {global} from '../styles';
import {useTranslation} from 'react-i18next';

const styles = StyleSheet.create({
  explanationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
    alignItems: 'center',
  },
  explanation: {
    color: '#595959',
    textAlign: 'left',
    fontSize: 18,
    fontFamily: 'Ubuntu-R',
  },
  icon: {
    borderRadius: 60,
    color: '#fff',
    padding: 12,
    backgroundColor: '#7dc6b6',
  },
});

type OnboardingHowScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OnboardingHow'
>;

export const OnboardingHow: React.FC<{
  navigation: OnboardingHowScreenNavigationProp;
}> = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <View style={global.container}>
      <Header />
      <View style={styles.explanationRow}>
        <Icon name="bluetooth" size={40} color="white" style={styles.icon} />
        <Text style={styles.explanation}>{t('onboardingHow.bluetooth')}</Text>
      </View>
      <View style={styles.explanationRow}>
        <Text style={styles.explanation}>{t('onboardingHow.smartphone')}</Text>
        <Icon name="smartphone" size={40} color="white" style={styles.icon} />
      </View>
      <View style={styles.explanationRow}>
        <Icon name="bell" size={40} color="white" style={styles.icon} />
        <Text style={styles.explanation}>{t('onboardingHow.bell')}</Text>
      </View>
      <View style={styles.explanationRow}>
        <Text style={styles.explanation}>{t('onboardingHow.shield2')}</Text>
        <ShieldIcon2
          style={styles.icon}
          height={68}
          width={68}
          viewBox="0 -32 120 180"
        />
      </View>
      <BasicButton
        title={t('onboardingHow.buttonTitleGetStarted')}
        onPress={async (): Promise<void> => {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'We need your consent',
              message:
                'ito needs to have access to your location to find other ito devices.\n\n' +
                'This will allow others around you to see that you are running ito.',
              buttonPositive: 'Continue',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            NativeModules.ItoBluetooth.restartTracing();
          }
          navigation.navigate('HomeTour');
        }}
      />
    </View>
  );
};
