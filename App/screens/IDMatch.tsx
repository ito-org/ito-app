import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import AlphaNotice from '../components/AlphaNotice';
import BasicButton from '../components/BasicButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  logoWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
  logo: {
    color: 'hsl(167, 39%, 54%)',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
    marginBottom: 16,
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
  lastFetchRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lastFetch: {
    color: 'hsl(0, 0%, 30%)',
    fontSize: 16,
    fontFamily: 'Ubuntu-R',
    marginRight: 8,
  },
  refreshIcon: {
    color: 'hsl(0, 0%, 30%)',
  },
  bubbleBox: {
    position: 'absolute',
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 6,
    paddingBottom: 6,
    marginLeft: 18,
    marginRight: 18,
    borderRadius: 12,
    flexDirection: 'column',
    zIndex: 1,
  },
  bubbleText: {
    paddingLeft: 14,
    paddingRight: 14,
    fontFamily: 'Ubuntu-R',
  },
  bubbleActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 4,
    paddingBottom: 4,
  },
  firstBubble: {
    top: 0,
  },
  secondBubble: {
    bottom: 90,
  },
  next: {
    fontFamily: 'Ubuntu-R',
    color: 'hsl(167, 39%, 64%)',
  },
  done: {
    fontFamily: 'Ubuntu-R',
    color: 'hsl(167, 39%, 64%)',
  },
  nextIcon: {
    color: 'hsl(167, 39%, 64%)',
  },
  bubbleTriangle: {
    position: 'absolute',
    width: 0,
    height: 0,
    bottom: -24,
    borderTopColor: 'white',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftWidth: 24,
    borderRightWidth: 24,
    borderTopWidth: 24,
    alignSelf: 'center',
  },
  radiusContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  radius1: {
    position: 'absolute',
    top: 120,
    borderRadius: 50,
    width: 100,
    height: 100,
    backgroundColor: 'hsl(167, 20%, 58%)',
  },
  radius2: {
    position: 'absolute',
    top: 60,
    borderRadius: 110,
    width: 220,
    height: 220,
    backgroundColor: 'rgba(135, 202, 187, 0.2)',
  },
  radius3: {
    borderRadius: 170,
    width: 340,
    height: 340,
    backgroundColor: 'rgba(133, 201, 186, 0.2)',
  },
  contacts: {
    color: 'hsl(0, 0%, 30%)',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
    marginBottom: 32,
    flex: 0.3,
  },
  bottomButtonContainer: {
    flex: 0.5,
    backgroundColor: 'hsl(0, 0%, 70%)',
  },
  buttonInfected: {
    backgroundColor: 'hsl(167, 35%, 58%)',
    borderRadius: 6,
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16,
    padding: 12,
  },
  buttonInfectedTitle: {
    color: '#2c2c2c',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
});

type IDMatchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'IDMatch'
>;

export const IDMatch: React.FC<{
  navigation: IDMatchScreenNavigationProp;
}> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>ito</Text>
        <AlphaNotice
          rootStyle={styles.alphaNoticeRoot}
          textStyle={styles.alphaNoticeText}
        />
      </View>
      <View style={styles.lastFetchRow}>
        <Text style={styles.lastFetch}>Last ID fetch: today 11:04</Text>
        <Icon name="refresh-ccw" size={18} style={styles.refreshIcon} />
      </View>

      <View style={styles.radiusContainer}>
        <Text style={styles.radius1} />
        <Text style={styles.radius2} />
        <Text style={styles.radius3} />
      </View>
      <Text style={styles.contacts}>just a few contacts around you</Text>
      <View style={styles.bottomButtonContainer}>
        <Button
          title="I think I'm infected"
          disabledTitleStyle={styles.buttonInfectedTitle}
          disabledStyle={styles.buttonInfected}
          disabled
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          top: '40%',
          marginLeft: 20,
          marginRight: 20,
          padding: 16,
        }}>
        <Text
          style={{
            fontFamily: 'Ubuntu-R',
            fontSize: 18,
            textAlign: 'center',
            marginBottom: 16,
          }}>
          We just discovered you have been in contact with a COVID-19 case.
          {'\n'}
          Don't panic!
        </Text>
        <BasicButton
          title="What to do next?"
          onPress={() => navigation.navigate('HomeBluetooth')}
        />
      </View>
    </View>
  );
};
export default IDMatch;
