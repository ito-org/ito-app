import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import Header from '../components/Header';
import {useTranslation} from 'react-i18next';
import {BottomMenu} from '../components/BottomMenu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 8,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 18,
    padding: 5,
    paddingTop: 64,
    paddingBottom: 50,
    color: '#595959',
    fontFamily: 'Ubuntu-R',
    lineHeight: 26,
  },
  arrowRightIcon: {
    right: 16,
    top: 16,
    fontSize: 20,
    color: '#2c2c2c',
    position: 'absolute',
  },
  buttonSymptoms: {
    borderRadius: 8,
    backgroundColor: '#91e6d3',
    padding: 20,
    marginBottom: 32,
    fontFamily: 'Ubuntu-R',
  },
  buttonSymptomsTitle: {
    color: '#2c2c2c',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'Ubuntu-M',
    justifyContent: 'space-between',
  },
  buttonTested: {
    borderRadius: 8,
    backgroundColor: '#91e6d3',
    padding: 20,
    fontFamily: 'Ubuntu-R',
  },
  buttonTestedTitle: {
    color: '#2c2c2c',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'Ubuntu-M',
  },
});

type EndangermentScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Endangerment'
>;

export const Endangerment: React.FC<{
  navigation: EndangermentScreenNavigationProp;
}> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Header
        navigationButton={{
          title: t('global.cancel'),
          fn: (): void => navigation.goBack(),
        }}
      />
      <Text style={styles.header}>{t('endangerment.info')}</Text>
      <TouchableWithoutFeedback
        onPress={(): void => navigation.navigate('SymptomInfo')}>
        <View style={styles.buttonSymptoms}>
          <Text style={styles.buttonSymptomsTitle}>
            {t('endangerment.symptomsTitle')}
          </Text>
          <Icon name="arrow-right" size={18} style={styles.arrowRightIcon} />
          <Text>{t('endangerment.symptomsText')}</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={(): void => navigation.navigate('AlphaPositiveResult')}>
        <View style={styles.buttonTested}>
          <Text style={styles.buttonTestedTitle}>
            {t('endangerment.positiveResultTitle')}
          </Text>
          <Icon name="arrow-right" size={18} style={styles.arrowRightIcon} />
          <Text>{t('endangerment.positiveResultText')}</Text>
        </View>
      </TouchableWithoutFeedback>
      <BottomMenu navigation={navigation} activate="Infected?"></BottomMenu>
    </View>
  );
};

export default Endangerment;
