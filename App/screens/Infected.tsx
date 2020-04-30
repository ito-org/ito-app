import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import {global, wPercent} from '../styles/style-v3';
import BasicButton from '../components/BasicButton';

type InfectedScreenProp = StackNavigationProp<RootStackParamList, 'Bluetooth'>;

export const Infected: React.FC<{navigation: InfectedScreenProp}> = ({
  navigation,
}) => {
  return (
    <View style={[global.col, {flex: 1}]}>
      <Header
        leftNavigtion={{fn: () => navigation.navigate('Home'), title: 'back'}}
        style={{flex: 0.07}}
      />
      <View style={[global.col, {flex: 0.85, justifyContent: 'space-between'}]}>
        <Text
          style={[
            global.textTitle,
            {
              textAlign: 'left',
              paddingLeft: wPercent(0.05),
              paddingRight: wPercent(0.05),
            },
          ]}>
          You think you might be infected?
        </Text>
        <Text
          style={[
            global.textInfo,
            {
              textAlign: 'left',
              paddingLeft: wPercent(0.05),
              paddingRight: wPercent(0.05),
            },
          ]}>
          To get a better picture if you might be infected and what to do next.
          Follow this questionaire.
        </Text>
        <BasicButton onPress={() => undefined} title="Check for symptoms" />
        <Text
          style={[
            global.textTitle,
            {
              textAlign: 'left',
              paddingLeft: wPercent(0.05),
              paddingRight: wPercent(0.05),
            },
          ]}>
          You have a positive test result?
        </Text>
        <Text
          style={[
            global.textInfo,
            {
              textAlign: 'left',
              paddingLeft: wPercent(0.05),
              paddingRight: wPercent(0.05),
            },
          ]}>
          To inform people you encountered, please upload your data. Nothing
          private will be shared.
        </Text>
        <BasicButton onPress={() => undefined} title="Upload data" />
        <BasicButton
          onPress={() => undefined}
          title="See your status"
          variant="textOnly"
        />
      </View>
    </View>
  );
};
