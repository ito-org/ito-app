import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import Header from '../components/Header';
import {design} from '../styles/index';
import {BasicButton} from '../components/BasicButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    padding: 16,
    backgroundColor: '#ffffff',
  },
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

export const SymptomInfo: React.FC<{
  navigation: SymptomInfoScreenNavigationProp;
}> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        navigation={{
          title: 'cancel',
          fn: (): void => navigation.goBack(),
        }}
      />
      <Text style={styles.explanation}>
        <FormattedMessage
          id="symptomInfo.checkSymptoms"
          defaultMessage={`Please check if your symptoms and situation are similar to a COVID-19
          infection. <br />
          <br />
          To do a self-assessed check first, please head over to your country's
          designated app: `}
        />
      </Text>
      <BasicButton
        buttonStyle={styles.titleButtonLayout}
        title="Open designated app"
        onPress={(): void => navigation.navigate('HomeBluetooth')}
      />
      <BasicButton
        variant="outlined"
        buttonStyle={styles.normalButtonLayout}
        title="Looks like I'm not infected"
        onPress={(): void => navigation.navigate('HomeBluetooth')}
      />
      <BasicButton
        variant="outlined"
        buttonStyle={styles.normalButtonLayout}
        title="I have a positive test result"
        onPress={(): void => navigation.navigate('AlphaPositiveResult')}
      />
    </View>
  );
};
