import React from 'react';
import {StyleSheet, Button, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';

type DataUploadScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DataUpload'
>;

export class DataUpload extends React.Component<{
  navigation: DataUploadScreenNavigationProp;
}> {
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
          Data got Uploaded {'\n'}
          Thanks for sharing this info!
        </Text>
        <Button
          title="Back to home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </>
    );
  }
}
