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
import {Logo} from '../components/Logo';
import {RootStackParamList} from 'App/App';
import {StackNavigationProp} from '@react-navigation/stack';
import {BasicButton} from '../components/BasicButton';

import {global} from '../styles';
import {IconTextBox} from '../components/IconTextBox';

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

export function OnboardingHow({
  navigation,
}: {
  navigation: OnboardingHowScreenNavigationProp;
}) {
  return (
    <View style={global.container}>
      <Logo />

      <IconTextBox name="bluetooth" align="right">
        we use your phone's bluetooth{'\n'}
        to let your phone see every{'\n'}
        other ito user around you
      </IconTextBox>
      <IconTextBox name="smartphone" align="left">
        your phone saves which other{'\n'}
        phones you encountered. this{'\n'}
        data is just on your phone
      </IconTextBox>
      <IconTextBox name="smartphone" align="right">
        if someone you encountered{'\n'}
        before got infected, you get a{'\n'}
        notification with information{'\n'}
        on what to do
      </IconTextBox>
      <IconTextBox name="smartphone" align="left">
        if someone you encountered{'\n'}
        before got infected, you get a{'\n'}
        notification with information{'\n'}
        on what to do
      </IconTextBox>
      <View style={styles.explanationRow}>
        <Text style={styles.explanation}>
          if you got infected and tested{'\n'}
          positive you can let everybody{'\n'}
          you encountered lately know
        </Text>
        <ShieldIcon2
          style={styles.icon}
          height={68}
          width={68}
          viewBox="0 -32 120 180"
        />
      </View>
      <BasicButton
        title="Get Started"
        onPress={async () => {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'ReactNativeCode Location Permission',
              message: 'ReactNativeCode App needs access to your location ',
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
}
