import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ShieldIcon from '../components/ShieldIcon';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import {Logo} from '../components/Logo';
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
});

type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

export function Onboarding({
  navigation,
}: {
  navigation: OnboardingScreenNavigationProp;
}) {
  return (
    <View style={global.container}>
      <Logo />
      <View style={styles.explanationContainer}>
        <Text style={styles.subtitle}>track infections, not people!</Text>
        <ShieldIcon style={styles.shield} />
        <Text style={styles.explanation}>
          protect yourself and {'\n'}
          the people surrounding you {'\n'}
          {'\n'}
          ito doesn't track any personal {'\n'}
          or location data {'\n'}- {'\n'}
          we just need to know {'\n'}
          about your health status
        </Text>
      </View>
      <BasicButton
        styleVariant="filled"
        title="How does this work?"
        onPress={() => navigation.navigate('OnboardingHow')}
      />
    </View>
  );
}
export default Onboarding;
