import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import BasicButton from '../components/BasicButton';
import {Radar} from '../components/Radar';
import {buttonColors, global, wPercent} from '../styles/style-v3';

const styles = StyleSheet.create({
  activity: {
    position: 'absolute',
    top: wPercent(0.04),
    right: wPercent(0.04),
    borderRadius: 100,
    padding: wPercent(0.02),
    backgroundColor: buttonColors.bg,
  },
});

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
          <Text style={global.textSubtitle}>No recent contact detected</Text>
          <Text style={global.textInfo}>
            Based on your data, it seems recently nobody came you
          </Text>
        </View>
      </View>
      <View style={styles.activity}>
        <Icon name="activity" size={wPercent(0.08)} color="black" style={{}} />
      </View>
      <View style={[global.row, global.center, {flex: 0.35}]}>
        <View style={[global.col, {flex: 1, justifyContent: 'space-around'}]}>
          <BasicButton
            title="I think I'm infected"
            onPress={(): void => navigation.navigate('Infected')}
          />
          <BasicButton title="Learn more" onPress={(): void => undefined} />
          <BasicButton
            title="Pause contact tracing"
            variant="textOnly"
            onPress={(): void => undefined}
          />
        </View>
      </View>
    </View>
  );
};
