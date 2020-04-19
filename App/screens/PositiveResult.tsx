import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {useTranslation} from 'react-i18next';
import {Header} from '../components/Header';
import {View, StyleSheet, Text} from 'react-native';
import global, {design} from '../styles';
import Icon from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';

type PositiveResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PositiveResult'
>;

const styles = StyleSheet.create({
  icon: {
    borderRadius: 10,
    borderWidth: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#91e6d3',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 60,
    paddingTop: 60,
    alignSelf: 'center',
    textAlign: 'center',
  },
  enterCode: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 100,
  },
  centered: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#91e6d3',
    textDecorationLine: 'underline',
    fontFamily: 'Ubuntu-R',
  },
});

export const PositiveResult: React.FC<{
  navigation: PositiveResultScreenNavigationProp;
}> = ({navigation}) => {
  const {t} = useTranslation();

  //TODO: navigation.navigate('DataUpload') after entering key or qr
  return (
    <View style={[global.container]}>
      <Header
        navigation={{
          title: t('global.cancel'),
          fn: (): void => navigation.goBack(),
        }}
        showHelp={true}
        showAlpha={false}
      />
      <Text style={design.explanation}>{t('positiveResult.instruction')}</Text>
      <View style={[styles.centered]}>
        <Icon name="camera" style={styles.icon} size={80}>
          {'\n'}
          <Text style={design.explanation}>
            {t('positiveResult.cameraMessage')}
          </Text>
        </Icon>
      </View>
      <TextInput
        style={[styles.textInput, styles.enterCode]}
        placeholder={t('positiveResult.textPlaceholderEnterCode')}
      />
    </View>
  );
};
