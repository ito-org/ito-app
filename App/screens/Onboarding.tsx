import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#9fc85b',
    textAlign: 'center',
  },
  logo: {
    color: 'white',
    fontWeight: '300',
    fontSize: 56,
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 8,
    textAlign: 'center',
  },
  shield: {
    paddingTop: 58,
    paddingBottom: 58,
    textAlign: 'center',
  },
  explanation: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 38,
  },
});

export class Onboarding extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>ito</Text>
        <Text style={styles.subtitle}>privacy-first infection tracking</Text>
        <Text style={styles.shield}>Shield</Text>
        <Text style={styles.explanation}>
          protect yourself and {'\n'}
          the people surrounding you {'\n'}
          {'\n'}
          ito doesn't track any personal {'\n'}
          or location data {'\n'}- {'\n'}
          we just need to know {'\n'}
          about your health status
        </Text>
        <Button
          title="How does this work?"
          onPress={() => this.props.navigation.navigate('Overview')}
          color="lightgreen"
        />
      </View>
    );
  }
}
