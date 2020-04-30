import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import React from 'react';
import {Text, View} from 'react-native';
import BasicButton from '../components/BasicButton';
import {Radar} from '../components/Radar';
import {global, hPercent} from '../styles/style-v3';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home: React.FC<{navigation: HomeScreenProp}> = ({navigation}) => {
  return (
    <View style={[global.col, {flex: 1, backgroundColor: 'white'}]}>
      <View style={[global.row, {flex: 0.4}]}>
        <View style={[global.col, {flex: 1}]}>
          <Radar flexWidth={0.45} />
        </View>
      </View>
      <View style={[global.row, global.center, {flex: 0.25}]}>
        <View style={[global.col, global.center, {flex: 1}]}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: hPercent(0.03),
              fontFamily: 'Ubuntu',
            }}>
            No recent contact detected
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: hPercent(0.026),
              fontFamily: 'Ubuntu',
            }}>
            Based on your data, it seems recently nobody came you
          </Text>
        </View>
      </View>
      <View style={[global.row, global.center, {flex: 0.35}]}>
        <View style={[global.col, {flex: 1, justifyContent: 'space-around'}]}>
          <BasicButton title="I think I'm infected" onPress={() => {}} />
          <BasicButton title="Learn more" onPress={() => {}} />
          <BasicButton title="Pause contact tracing" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};
