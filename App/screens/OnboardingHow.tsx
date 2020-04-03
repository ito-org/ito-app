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
    color: '#9fc85b',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
  iconLeft: {
    flexDirection: 'row',
  },
});

export class OnboardingHow extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>ito</Text>
        <View style={styles.iconLeft}>
          <Icon name="bluetooth" size={64} color="white" />
          <Text style={styles.explanation}>
            we use your phone's bluetooth to let your phone see every other ito
            user around you
          </Text>
        </View>
        <Text style={styles.explanation}>
          your phone saves which other phones you encountered. this data is just
          on your phone
        </Text>
        <Text style={styles.explanation}>
          if someone who you encountered before got infected, you get a
          notification with information on what to do
        </Text>
        <Text style={styles.explanation}>
          if you got infected and tested positive you can let everybody who you
          encountered lately know
        </Text>
        <View style={styles.bottomButtonContainer}>
          <Button
            title="Get Started"
            onPress={() => this.props.navigation.navigate('Overview')}
            titleStyle={styles.buttonHowTitle}
            buttonStyle={styles.buttonHow}
          />
        </View>
      </View>
    );
  }
}
