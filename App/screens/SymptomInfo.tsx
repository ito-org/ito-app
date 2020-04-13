import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {RootStackParamList} from 'App/App';
import AlphaNotice from '../components/AlphaNotice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  cancel: {
    position: 'absolute',
    left: 12,
    top: 12,
  },
  chevronLeftIcon: {},
  logoWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
  alphaNoticeRoot: {
    position: 'absolute',
    top: 12,
    left: 48,
    padding: 0,
  },
  alphaNoticeText: {
    fontSize: 14,
    lineHeight: 14,
  },
  logo: {
    color: '#7dc6b6',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
    marginBottom: 16,
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

export function SymptomInfo({
  navigation,
}: {
  navigation: SymptomInfoScreenNavigationProp;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.cancel}>
        <Text onPress={() => navigation.navigate('Endangerment')}>
          <Icon name="chevron-left" size={18} style={styles.chevronLeftIcon} />{' '}
          cancel
        </Text>
      </View>
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>ito</Text>
        <AlphaNotice
          rootStyle={styles.alphaNoticeRoot}
          textStyle={styles.alphaNoticeText}
        />
      </View>
      <Text style={styles.explanation}>
        Please check if your symptoms and situation are similar to a COVID-19
        infection.{'\n'}
        {'\n'}
        To do a self-assessed check first, please head over to your country's
        designated app:
      </Text>
      <Button
        title="Open designated app"
        onPress={() => navigation.navigate('HomeBluetooth')}
        titleStyle={styles.buttonOpenAppTitle}
        buttonStyle={styles.buttonOpenApp}
      />
      <Button
        title="Looks like I'm not infected"
        onPress={() => navigation.navigate('HomeBluetooth')}
        titleStyle={styles.buttonOtherTitle}
        buttonStyle={styles.buttonOther}
      />
      <Button
        title="I have a positive test result"
        onPress={() => navigation.navigate('HomeBluetooth')}
        titleStyle={styles.buttonOtherTitle}
        buttonStyle={styles.buttonOther}
      />
    </View>
  );
}
