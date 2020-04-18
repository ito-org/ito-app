import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import {BasicButton} from '../components/BasicButton';

import {global} from '../styles';
import {useTranslation} from 'react-i18next';

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

export const ConfirmationCode: React.FC<{
  navigation: ConfirmationCodeScreenNavigationProp;
}> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <View style={[global.container, styles.container]}>
      <Text style={styles.explanation}>{t('confirmationCode.enterCode')}</Text>
      <BasicButton
        title={t('confirmationCode.buttonTitleSubmit')}
        onPress={(): void => navigation.navigate('DataUpload')}
      />
    </View>
  );
};
export default ConfirmationCode;
