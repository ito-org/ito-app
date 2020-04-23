import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import AsyncStorage from '@react-native-community/async-storage';
import AlphaNotice from '../components/AlphaNotice';
import BasicButton from '../components/BasicButton';
import {useTranslation} from 'react-i18next';
import {BottomMenu} from '../components/BottomMenu';

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
    top: -6,
  },
  secondBubble: {
    top: 230,
  },
  thirdBubble: {
    bottom: 78,
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
  bubbleTriangleTop: {
    position: 'absolute',
    width: 0,
    height: 0,
    top: -24,
    transform: [{rotateX: '180deg'}],
    borderTopColor: 'white',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftWidth: 24,
    borderRightWidth: 24,
    borderTopWidth: 24,
    alignSelf: 'center',
  },
  bubbleTriangleLeft: {
    left: 100,
  },
  radiusContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  radius1Icon: {
    position: 'absolute',
    top: 155,
    paddingLeft: 35,
    width: 100,
    height: 100,
    zIndex: 3,
  },
  radius1: {
    position: 'absolute',
    top: 120,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'black',
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
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'hsl(0, 0%, 70%)',
  },
  buttonInfected: {
    backgroundColor: 'hsl(167, 35%, 58%)',
    borderColor: 'hsl(167, 35%, 58%)',
    borderRadius: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  buttonInfectedTitle: {
    color: '#2c2c2c',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
});

type HomeTourScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeTour'
>;

export const HomeTour: React.FC<{
  navigation: HomeTourScreenNavigationProp;
}> = ({navigation}) => {
  const [step, setStep] = useState(1);
  const {t} = useTranslation();
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
        <Text style={styles.lastFetch}>
          {t('home.lastIdFetch')}: {t('home.today')} 11:04
        </Text>
        <Icon name="refresh-ccw" size={18} style={styles.refreshIcon} />
      </View>

      <View style={styles.radiusContainer}>
        {step === 1 && (
          <TouchableWithoutFeedback onPress={(): void => setStep(2)}>
            <View style={[styles.bubbleBox, styles.firstBubble]}>
              <Text style={styles.bubbleText}>{t('homeTour.circle')}</Text>
              <View style={styles.bubbleActions}>
                <Text style={styles.next}>{t('homeTour.next')}</Text>
                <Icon name="chevron-right" size={18} style={styles.nextIcon} />
              </View>
              <View style={styles.bubbleTriangle} />
            </View>
          </TouchableWithoutFeedback>
        )}
        {step === 2 && (
          <TouchableWithoutFeedback onPress={(): void => setStep(3)}>
            <View style={[styles.bubbleBox, styles.secondBubble]}>
              <View style={styles.bubbleTriangleTop} />
              <Text style={styles.bubbleText}>{t('homeTour.pause')}</Text>
              <View style={styles.bubbleActions}>
                <Text style={styles.done}>{t('homeTour.next')}</Text>
                <Icon name="chevron-right" size={18} style={styles.nextIcon} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        <Text style={styles.radius1} />
        <Icon name="pause" style={styles.radius1Icon} size={30}></Icon>
        <Text style={styles.radius2} />
        <Text style={styles.radius3} />
      </View>
      <Text style={styles.contacts}>just a few contacts around you</Text>
      {step === 3 && (
        <TouchableWithoutFeedback
          onPress={(): void => {
            AsyncStorage.setItem('userHasSeenOnboarding', 'true');
            navigation.navigate('Home');
          }}>
          <View style={[styles.bubbleBox, styles.thirdBubble]}>
            <Text style={styles.bubbleText}>{t('homeTour.report')}</Text>
            <View style={styles.bubbleActions}>
              <Text style={styles.done}>{t('homeTour.done')}</Text>
              <Icon name="chevron-right" size={18} style={styles.nextIcon} />
            </View>
            <View style={[styles.bubbleTriangle, styles.bubbleTriangleLeft]} />
          </View>
        </TouchableWithoutFeedback>
      )}
      <View style={styles.bottomButtonContainer}>
        <BasicButton
          title={t('homeTour.buttonTitleInfected')}
          disabledTitleStyle={styles.buttonInfectedTitle}
          disabledStyle={styles.buttonInfected}
          disabled
        />
      </View>
      <BottomMenu activate={'Tracing'}></BottomMenu>
    </View>
  );
};
export default HomeTour;
