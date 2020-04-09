import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'App/App';

type SymptomInfoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SymptomInfo'>

export class SymptomInfo extends React.Component<{navigation: SymptomInfoScreenNavigationProp}> {
  render() {
    return (
      <>
        <Text>Some info what to do if symptoms exist</Text>
        <Button
          title="OK"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </>
    );
  }
}
