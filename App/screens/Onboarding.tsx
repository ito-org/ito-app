import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import ShieldIcon from '../components/ShieldIcon';
import AlphaNotice from '../components/AlphaNotice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  logo: {
    color: '#7dc6b6',
    fontSize: 56,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
  },
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
  explanation: {
    color: '#595959',
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

export function Onboarding({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
        }}>
        <Text style={styles.logo}>ito</Text>
        <AlphaNotice
          rootStyle={{
            position: 'absolute',
            top: 24,
            left: 80,
          }}
          textStyle={{
            fontSize: 24,
          }}
        />
      </View>
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
