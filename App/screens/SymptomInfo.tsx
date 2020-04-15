import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import {RootStackParamList} from 'App/App';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  explanation: {
    fontSize: 18,
    padding: 5,
    paddingTop: 64,
    paddingBottom: 50,
    color: '#595959',
    fontFamily: 'Ubuntu-R',
    lineHeight: 26,
  },
  buttonOpenApp: {
    backgroundColor: '#91e6d3',
    borderRadius: 6,
    marginBottom: 48,
    padding: 12,
  },
  buttonOpenAppTitle: {
    color: '#2c2c2c',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
  buttonOther: {
    backgroundColor: '#ffffff',
    borderColor: '#7dc6b6',
    borderWidth: 2,
    borderRadius: 6,
    marginBottom: 8,
    padding: 12,
  },
  buttonOtherTitle: {
    color: '#595959',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
});

type SymptomInfoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SymptomInfo'
>;

export const SymptomInfo: React.FC<{
  navigation: SymptomInfoScreenNavigationProp;
}> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        showNavigate={true}
        navigateTitle="cancel"
        onNavigate={(): void => navigation.goBack()}
      />
      <Text style={styles.explanation}>
        Please check if your symptoms and situation are similar to a COVID-19
        infection.{'\n'}
        {'\n'}
        To do a self-assessed check first, please head over to your country's
        designated app:
      </Text>
      <Button
        title="Open designated app"
        onPress={(): void => navigation.navigate('HomeBluetooth')}
        titleStyle={styles.buttonOpenAppTitle}
        buttonStyle={styles.buttonOpenApp}
      />
      <Button
        title="Looks like I'm not infected"
        onPress={(): void => navigation.navigate('HomeBluetooth')}
        titleStyle={styles.buttonOtherTitle}
        buttonStyle={styles.buttonOther}
      />
      <Button
        title="I have a positive test result"
        onPress={(): void => navigation.navigate('AlphaPositiveResult')}
        titleStyle={styles.buttonOtherTitle}
        buttonStyle={styles.buttonOther}
      />
    </View>
  );
};
