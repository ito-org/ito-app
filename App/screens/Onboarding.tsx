import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ShieldIcon from '../components/ShieldIcon';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import {Logo} from '../components/Logo';
import {AlphaNotice} from '../components/AlphaNotice';
import {BasicButton} from '../components/BasicButton';

import {global} from '../styles';

const styles = StyleSheet.create({
  subtitle: {
    color: '#595959',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 8,
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
  },
  shield: {
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  explanationContainer: {
    flex: 1,
  },
  explanation: {
    color: '#595959',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 38,
    fontFamily: 'Ubuntu-R',
  },
  logo: {fontSize: 60},
  logoWrapper: {marginLeft: 'auto', marginRight: 'auto'},
  alphaNotice: {position: 'absolute', top: 26, right: -86},
  alphaNoticeText: {fontSize: 24},
});

type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

export const Onboarding: React.FC<{
  navigation: OnboardingScreenNavigationProp;
}> = ({navigation}) => {
  return (
    <View style={global.container}>
      <View style={styles.logoWrapper}>
        <Logo textStyle={styles.logo} />
        <AlphaNotice
          rootStyle={styles.alphaNotice}
          textStyle={styles.alphaNoticeText}
        />
      </View>
      <View style={styles.explanationContainer}>
        <Text style={styles.subtitle}>
          <FormattedMessage
            id="onboarding.slogan"
            defaultMessage={`track infections, not people!`}
          />
        </Text>
        <ShieldIcon style={styles.shield} />
        <Text style={styles.explanation}>
          <FormattedMessage
            id="onboarding.slogan"
            defaultMessage={`protect yourself and <br />
            the people surrounding you <br />
            <br />
            ito doesn't track any personal <br />
            or location data <br /> - <br />
            we just need to know <br />
            about your health status`}
          />
        </Text>
      </View>
      <BasicButton
        title="How does this work?"
        onPress={(): void => navigation.navigate('OnboardingHow')}
      />
    </View>
  );
};
export default Onboarding;
