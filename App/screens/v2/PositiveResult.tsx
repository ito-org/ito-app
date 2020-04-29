import React, {ReactNode, useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {useTranslation} from 'react-i18next';
import {Header} from '../components/Header';
import {View, StyleSheet, Text, Dimensions, NativeModules} from 'react-native';
import global, {design} from '../styles';
import Icon from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';
import {RNCamera} from 'react-native-camera';
import BasicButton from '../components/BasicButton';
import {BottomMenu} from '../components/BottomMenu';

const {ItoBluetooth} = NativeModules;

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

  const [uploadSuccess, setUploadSuccess] = useState(null);
  useEffect(() => {
    if (uploadSuccess === null) {
      return;
    }
    if (uploadSuccess) {
      console.log('TCN Upload succeeded');
      setTimeout((): void => {
        navigation.navigate('DataUpload');
      }, 1000);
    } else {
      console.warn('TCN Upload failed');
      setTimeout((): void => {
        navigation.navigate('DataUpload');
      }, 1000);
    }
  }, [navigation, uploadSuccess]);
  return (
    <View style={[global.container]}>
      <Header
        navigationButton={{
          title: t('global.cancel'),
          fn: (): void => navigation.goBack(),
        }}
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
          onBarCodeRead={(data: object): void => {
            console.warn('onBarCodeRead:', data);
          }}>
          {({
            camera: _camera,
            status,
            recordAudioPermissionStatus: _recordAudioPermissionStatus,
          }): ReactNode => {
            console.log('RNCamera status:', status);
            if (status !== 'READY') {
              return (
                <Icon name="camera" style={styles.icon} size={80}>
                  {'\n'}
                  <Text style={design.explanation}>
                    {t('positiveResult.cameraMessage')}
                  </Text>
                </Icon>
              );
            }
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
        buttonStyle={[design.bottomOffset, design.bottomOffset]}
        onPress={(): void => {
          // allows uploading again when going back / visiting the screen anew
          // going back should be prevented once actual verification is implemented
          setUploadSuccess(null);
          // TODO: make timeframe for uploading TCNS configurable
          const now = Date.now() / 1000;
          const sevenDaysAgo = now - 7 * 24 * 60 * 60;
          // FIXME: store this timeout and clear it to allow cancelling
          setTimeout(() => {
            ItoBluetooth.publishBeaconUUIDs(
              sevenDaysAgo,
              now,
              setUploadSuccess,
            );
          }, 2000);
          navigation.navigate('Upload');
        }}
      />
      <BottomMenu navigation={navigation} activate="Infected?"></BottomMenu>
    </View>
  );
};
