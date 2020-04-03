import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native';

export class SymptomInfo extends React.Component {
  render() {
    return (
      <>
        <Text>Some info what to do if symptoms exist</Text>
        <Button
          title="OK"
          onPress={() => this.props.navigation.navigate('Overview')}
        />
      </>
    );
  }
}
