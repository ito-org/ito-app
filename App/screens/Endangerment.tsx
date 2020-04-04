import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
    paddingTop: 80,
    paddingBottom: 50,
  },
  buttonSymptoms: {
    backgroundColor: '#4770e0',
  },
  buttonTested: {
    backgroundColor: '#4770e0',
  },
});

export function Endangerment(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Infected? - {'\n'}
        Don't panic!
      </Text>
      <Button
        title="I have symptoms"
        style={styles.buttonSymptoms}
        onPress={() => this.props.navigation.navigate('SymptomInfo')}
      />
      <Button
        title="I was tested positive"
        style={styles.buttonTested}
        onPress={() => this.props.navigation.navigate('ConfirmationCode')}
      />
    </View>
  );
}

export default Endangerment;
