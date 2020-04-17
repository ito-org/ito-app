import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import Header from '../components/Header';
import {global} from '../styles';

const styles = StyleSheet.create({
  thanks: {
    textAlign: 'left',
    fontFamily: 'Ubuntu-R',
    fontSize: 18,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    marginTop: 64,
  },
});

type DataUploadScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DataUpload'
>;

export const DataUpload: React.FC<{
  navigation: DataUploadScreenNavigationProp;
}> = ({navigation}) => {
  return (
    <View style={global.container}>
      <Header
        navigation={{
          title: 'home',
          fn: (): void => navigation.navigate('HomeBluetooth'),
        }}
        showHelp={true}
      />
      <Text style={styles.thanks}>
        Thanks for sharing your{'\n'}
        verified test result. {'\n'}
        {'\n'}
        Get well soon!
      </Text>
    </View>
  );
};
export default DataUpload;
