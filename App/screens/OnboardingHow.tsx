import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#9fc85b',
    textAlign: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
    marginBottom: 8,
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
    color: '#9fc85b',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
  explanationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
  },
  explanation: {
    color: 'white',
    textAlign: 'left',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 38,
    fontFamily: 'Ubuntu-R',
  },
});

export function OnboardingHow({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ito</Text>
      <View style={styles.explanationRow}>
        <Icon name="bluetooth" size={64} color="white" />
        <Text style={styles.explanation}>
          we use your phone's bluetooth {'\n'}
          to let your phone see every {'\n'}
          other ito user around you
        </Text>
      </View>
      <View style={styles.explanationRow}>
        <Text style={styles.explanation}>
          your phone saves which other {'\n'}
          phones you encountered. this {'\n'}
          data is just on your phone
        </Text>
        <Icon name="smartphone" size={64} color="white" />
      </View>
      <View style={styles.explanationRow}>
        <Icon name="bell" size={64} color="white" />
        <Text style={styles.explanation}>
          if someone you encountered {'\n'}
          before got infected, you get a {'\n'}
          notification with information {'\n'}
          on what to do
        </Text>
      </View>
      <View style={styles.explanationRow}>
        <Text style={styles.explanation}>
          if you got infected and tested {'\n'}
          positive you can let everybody {'\n'}
          you encountered lately know
        </Text>
        <Icon name="shield" size={64} color="white" />
      </View>
      <View style={styles.bottomButtonContainer}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Home')}
          titleStyle={styles.buttonHowTitle}
          buttonStyle={styles.buttonHow}
        />
      </View>
    </View>
  );
}
