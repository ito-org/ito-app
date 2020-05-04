import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {StyleSheet, View, Text, Animated} from 'react-native';
import {useTranslation} from 'react-i18next';
import global, {design} from '../styles';
import Icon from 'react-native-vector-icons/Feather';
import BasicButton from '../components/BasicButton';
import Header from '../components/Header';

type UploadScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Upload'
>;

type UploadScreenRouteProp = RouteProp<RootStackParamList, 'Upload'>;

const styles = StyleSheet.create({
  icon: {
    borderRadius: 10,
    borderWidth: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 50,
    paddingTop: 50,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#91e6d3',
    transform: [{rotateZ: '45deg'}],
  },
  enterCode: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100,
  },
  cancelButton: {
    marginBottom: 16,
  },
});

export const Upload: React.FC<{
  navigation: UploadScreenNavigationProp;
  route: UploadScreenRouteProp;
}> = ({navigation, route}) => {
  const {t} = useTranslation();
  const {deferUploadTimeout} = route.params;

  const animRotation = new Animated.Value(0);
  const rotation = animRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const animatedStyle = {
    transform: [{rotate: rotation}],
  };
  const startAnimation = (): void => {
    animRotation.setValue(0);
    Animated.timing(animRotation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start(() => startAnimation());
  };
  startAnimation();
  const cancelUpload = (): void => {
    if (!deferUploadTimeout.current) {
      console.warn('failed to clear deferUploadTimeout', deferUploadTimeout);
      return;
    }
    console.log('clearing deferUploadTimeout', deferUploadTimeout);
    clearTimeout(deferUploadTimeout.current);
    deferUploadTimeout.current = null;
    navigation.navigate('PositiveResult');
  };

  return (
    <View style={[global.container]}>
      <Header
        navigationButton={{
          title: t('global.cancel'),
          fn: cancelUpload,
        }}
        showHelp={true}
        showAlpha={true}
      />
      <Text style={design.explanation}>{t('uploadData.info')}</Text>
      <Animated.View style={[design.center, animatedStyle]}>
        <Icon name="loader" style={styles.icon} size={250} />
      </Animated.View>
      <BasicButton
        title={t('uploadData.buttonTitleCancel')}
        variant="outlined"
        buttonStyle={styles.cancelButton}
        onPress={cancelUpload}
      />
    </View>
  );
};
