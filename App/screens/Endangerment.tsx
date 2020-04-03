import React from 'react';
import {StyleSheet, Button, Text} from 'react-native';

export class Endangerment extends React.Component {
  render() {
    let trashStyle = StyleSheet.create({
      header: {
        textAlign: 'center',
        fontSize: 20,
        padding: 5,
        paddingBottom: 50,
      },
    });
    return (
      <>
        <Text style={trashStyle.header}>
          Infected? - {'\n'}
          Don't panic!
        </Text>
        <Button
          title="I have symptoms"
          onPress={() => this.props.navigation.navigate('SymptomInfo')}
        />
        <Button
          title="I was tested positive"
          onPress={() => this.props.navigation.navigate('ConfirmationCode')}
        />
      </>
    );
  }
}
