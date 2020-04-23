import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';

interface BottomMenuProps {
  navigation?: StackNavigationProp<RootStackParamList, any>;
  activate?: string;
}

export const BottomMenu: React.FC<BottomMenuProps> = ({
  navigation,
  activate,
}) => {
  return <View></View>;
};
