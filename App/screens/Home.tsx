import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle, LinearGradient, Stop} from 'react-native-svg';
import {
  colorPaletteMintGrey,
  wPercent,
  hPercent,
  global,
} from '../styles/style-v3';
import {Radar} from '../components/Radar';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home: React.FC<{navigation: HomeScreenProp}> = ({navigation}) => {
  return (
    <View style={[global.row]}>
      <View style={global.col}>
        <Radar />
      </View>
    </View>
  );
};
