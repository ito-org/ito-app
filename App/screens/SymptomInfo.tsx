import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {RootStackParamList} from 'App/App';
import AlphaNotice from '../components/AlphaNotice';
import {design} from '../styles/index';
import {BasicButton} from '../components/BasicButton';

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
  alphaNoticeText: design.alphaNoticeText,
  logo: design.logo,
  explanation: {
    padding: 5,
    paddingTop: 64,
    paddingBottom: 50,
    lineHeight: 26,
    ...design.explanation,
  },
  titleButtonLayout: {
    marginBottom: 48,
    marginLeft: 8,
    marginRight: 8,
  },
  normalButtonLayout: {
    margin: 8,
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
      <BasicButton
        buttonStyle={styles.titleButtonLayout}
        title="Open designated app"
        onPress={() => navigation.navigate('HomeBluetooth')}
      />
      <BasicButton
        variant="outlined"
        buttonStyle={styles.normalButtonLayout}
        title="Looks like I'm not infected"
        onPress={() => navigation.navigate('HomeBluetooth')}
      />
      <BasicButton
        variant="outlined"
        buttonStyle={styles.normalButtonLayout}
        title="I have a positive test result"
        onPress={() => navigation.navigate('AlphaPositiveResult')}
      />
    </View>
  );
}
