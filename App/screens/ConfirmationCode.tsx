import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import {BasicButton} from '../components/BasicButton';

import {global} from '../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  explanation: {
    color: '#595959',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 38,
    fontFamily: 'Ubuntu-R',
  },
});

type ConfirmationCodeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ConfirmationCode'
>;

export function ConfirmationCode({
  navigation,
}: {
  navigation: ConfirmationCodeScreenNavigationProp;
}) {
  return (
    <View style={[global.container, styles.container]}>
      <Text style={styles.explanation}>
        Please scan the QR Code you got with your test or enter the result ID to
        verify your positive test result.
      </Text>
      <BasicButton
        title="Test verification code entered"
        onPress={() => navigation.navigate('DataUpload')}
      />
    </View>
  );
}
