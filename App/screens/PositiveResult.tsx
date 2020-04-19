import React, {ReactNode} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {useTranslation} from 'react-i18next';
import {Header} from '../components/Header';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import global, {design} from '../styles';
import Icon from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';
import {RNCamera} from 'react-native-camera';
import BasicButton from '../components/BasicButton';

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
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 50,
    paddingTop: 50,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#595959',
  },
  enterCode: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100,
  },
});

export const PositiveResult: React.FC<{
  navigation: PositiveResultScreenNavigationProp;
}> = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <View style={[global.container]}>
      <Header
        navigation={{
          title: t('global.cancel'),
          fn: (): void => navigation.goBack(),
        }}
        showHelp={true}
        showAlpha={true}
      />
      <Text style={design.explanation}>{t('positiveResult.instruction')}</Text>
      <View style={design.center}>
        <RNCamera
          captureAudio={false}
          style={{
            width: Dimensions.get('window').width - 150,
            height: Dimensions.get('window').width - 150,
          }}
          androidCameraPermissionOptions={{
            title: t('positiveResult.camPermissionTitle'),
            message: t('positiveResult.camPermissionText'),
            buttonPositive: t('global.ok'),
            buttonNegative: t('global.cancel'),
          }}
          onBarCodeRead={(data) => {
            console.warn(data);
          }}>
          {({camera, status, recordAudioPermissionStatus}): ReactNode => {
            console.log(status);
            if (status !== 'READY')
              return (
                <Icon name="camera" style={styles.icon} size={80}>
                  {'\n'}
                  <Text style={design.explanation}>
                    {t('positiveResult.cameraMessage')}
                  </Text>
                </Icon>
              );
          }}
        </RNCamera>
      </View>
      <TextInput
        style={[design.textInput, styles.enterCode]}
        placeholder={t('positiveResult.textPlaceholderEnterCode')}
      />
      <BasicButton
        title={t('positiveResult.buttonTitleOk')}
        variant="outlined"
        onPress={() => navigation.navigate('DataUpload')}
      />
    </View>
  );
};
