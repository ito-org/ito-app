import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#7dc6b6',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 56,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
  },
  img: {
    width: 120,
    height: 120,
  },
});

type LoadingBluetoothScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Loading'
>;

export const Loading: React.FC<{
  navigation: LoadingBluetoothScreenNavigationProp;
}> = ({navigation}) => {
  React.useEffect(() => {
    const bootstrapAsync: () => void = async () => {
      let userHasSeenOnboarding: boolean;

      try {
        userHasSeenOnboarding =
          (await AsyncStorage.getItem('userHasSeenOnboarding')) === 'true';
      } catch (e) {
        userHasSeenOnboarding = false;
      }

      if (userHasSeenOnboarding) {
        setTimeout(
          () =>
            navigation.reset({
              index: 0,
              routes: [{name: 'HomeBluetooth'}],
            }),
          500,
        );
      } else {
        setTimeout(
          () =>
            navigation.reset({
              index: 0,
              routes: [{name: 'AlphaWarning'}],
            }),
          500,
        );
      }
    };

    bootstrapAsync();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/white_arcs_transparent.png')}
        style={styles.img}
      />
    </View>
  );
};
export default Loading;
