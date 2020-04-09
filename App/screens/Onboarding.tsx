import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import ShieldIcon from '../components/ShieldIcon';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'App/App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#4770e0',
    textAlign: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 56,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
  },
  subtitle: {
    color: 'white',
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
  explanation: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 38,
    fontFamily: 'Ubuntu-R',
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  buttonHow: {
    backgroundColor: 'white',
    borderRadius: 6,
  },
  buttonHowTitle: {
    color: '#4770e0',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
});

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>

export function Onboarding({navigation}: {navigation: OnboardingScreenNavigationProp}) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ito</Text>
      <Text style={styles.subtitle}>privacy-first infection tracking</Text>
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
      <View style={styles.bottomButtonContainer}>
        <Button
          title="How does this work?"
          onPress={() => navigation.navigate('OnboardingHow')}
          titleStyle={styles.buttonHowTitle}
          buttonStyle={styles.buttonHow}
        />
      </View>
    </View>
  );
}
export default Onboarding;
