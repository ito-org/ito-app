import React from 'react';
import {Button, TextInput} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';

type ConfirmationCodeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ConfirmationCode'
>;

export class ConfirmationCode extends React.Component<{
  navigation: ConfirmationCodeScreenNavigationProp;
}> {
  render() {
    // let trashStyle = StyleSheet.create({
    //   header: {
    //     textAlign: 'center',
    //     fontSize: 20,
    //     padding: 5,
    //     paddingBottom: 50,
    //   },
    // });
    return (
      <>
        <TextInput placeholder="Enter confirmation code"></TextInput>
        <Button
          title="OK"
          onPress={() => this.props.navigation.navigate('DataUpload')}
        />
      </>
    );
  }
}
