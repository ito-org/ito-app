import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import AsyncStorage from '@react-native-community/async-storage';
import Svg, {Path} from 'react-native-svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#7dc6b6',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 70,
    paddingLeft: 10,
    fontFamily: 'Righteous-Regular',
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
      <Svg width="73" height="70" viewBox="0 0 73 70" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M58.7582 0.891998H14.1862C6.42216 0.891998 0.128174 7.18598 0.128174 14.95V55.16C0.128174 62.924 6.42216 69.218 14.1862 69.218H58.7582C66.5222 69.218 72.8162 62.924 72.8162 55.16V14.95C72.8162 7.18598 66.5222 0.891998 58.7582 0.891998ZM22.5762 61.43C25.2036 62.5524 28.0272 63.1437 30.8842 63.17C33.667 63.1782 36.4224 62.6195 38.9822 61.528C41.3416 60.5265 43.5076 59.12 45.3822 57.372C45.5422 57.226 38.1042 49.172 38.1042 49.172C37.1521 50.077 36.0425 50.8002 34.8302 51.306C33.5378 51.8461 32.1465 52.1091 30.7462 52.078C29.2907 52.0401 27.8564 51.7209 26.5222 51.138C23.5582 49.7847 21.1815 47.408 19.8282 44.444C19.238 43.1122 18.9184 41.6764 18.8882 40.22C18.8676 38.8206 19.1302 37.4314 19.6602 36.136C20.1557 34.917 20.8755 33.8017 21.7822 32.848C21.7822 32.848 13.7822 25.468 13.6422 25.628C11.8927 27.5152 10.5117 29.713 9.5702 32.108C8.53402 34.72 8.01442 37.5082 8.0402 40.318C8.08044 43.1735 8.67124 45.9944 9.7802 48.626C10.9549 51.4313 12.6772 53.9742 14.8462 56.106C17.2395 58.5047 19.8162 60.2794 22.5762 61.43ZM41.3801 7.26C44.2373 7.28411 47.0613 7.87556 49.6881 9.00001C52.4481 10.1533 55.0234 11.93 57.4141 14.33C59.5827 16.4622 61.3049 19.005 62.4801 21.81C63.5891 24.4416 64.1799 27.2625 64.2201 30.118C64.2447 32.9245 63.7252 35.7092 62.6901 38.318C61.7471 40.7128 60.3662 42.911 58.6181 44.8C58.4781 44.958 50.4781 37.58 50.4781 37.58C51.3849 36.6256 52.1046 35.5097 52.6001 34.29C53.1327 32.993 53.398 31.6019 53.3801 30.2C53.3468 28.7455 53.026 27.3119 52.4361 25.982C51.0796 23.0202 48.7039 20.6445 45.7421 19.288C44.4073 18.7049 42.9722 18.3857 41.5161 18.348C40.1159 18.3181 38.7248 18.581 37.4321 19.12C36.2196 19.6263 35.11 20.3502 34.1581 21.256C34.1581 21.256 26.7221 13.202 26.8821 13.056C28.7565 11.3083 30.9226 9.90236 33.2821 8.90201C35.8418 7.80996 38.5972 7.25124 41.3801 7.26Z"
          fill="white"
        />
      </Svg>
      <Text style={styles.logo}>ito</Text>
    </View>
  );
};
export default Loading;
