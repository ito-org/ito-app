import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'hsl(224, 71%, 58%)',
  },
  logo: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
    marginBottom: 16,
  },
  header: {
    fontSize: 15,
    padding: 5,
    paddingTop: 64,
    paddingBottom: 50,
    color: 'white',
    fontFamily: 'Ubuntu-R',
    lineHeight: 26,
    letterSpacing: 1,
  },
  arrowRightIcon: {
    right: 16,
    top: 16,
    fontSize: 20,
    color: 'hsl(224, 71%, 58%)',
    position: 'absolute',
  },
  buttonSymptoms: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 32,
    fontFamily: 'Ubuntu-R',
  },
  buttonSymptomsTitle: {
    color: '#4770e0',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'Ubuntu-M',
    justifyContent: 'space-between',
  },
  buttonTested: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 16,
    fontFamily: 'Ubuntu-R',
  },
  buttonTestedTitle: {
    color: '#4770e0',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'Ubuntu-M',
  },
});

export function Endangerment({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ito</Text>
      <Text style={styles.header}>
        Tell us if you have symptoms or you{'\n'}
        already have a positive test result
      </Text>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('SymptomInfo')}>
        <View style={styles.buttonSymptoms}>
          <Text style={styles.buttonSymptomsTitle}>
            I have typical symptoms
          </Text>
          <Icon name="arrow-right" size={18} style={styles.arrowRightIcon} />
          <Text>
            Don't worry!{'\n'}
            We will help you figure out what to do next.
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('ConfirmationCode')}>
        <View style={styles.buttonTested}>
          <Text style={styles.buttonTestedTitle}>I have a positive result</Text>
          <Icon name="arrow-right" size={18} style={styles.arrowRightIcon} />
          <Text>
            If you got a positive result from your doctor or authorities please
            let us know to help everybody else stay healthy
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Endangerment;
