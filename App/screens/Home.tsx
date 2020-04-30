import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import Header from '../components/Header';

import {global} from '../styles';
import BasicButton from '../components/BasicButton';
import {BlurBackground} from '../components/BackgroundBlur';
import {useTranslation} from 'react-i18next';
import {BottomMenu} from '../components/BottomMenu';
import {ButtonPopup} from '../components/ButtonPopup';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  lastFetchRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lastFetch: {
    color: '#595959',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
    marginBottom: 8,
    marginRight: 8,
  },
  refreshIcon: {
    color: '#595959',
  },
  circlesContainer: {
    margin: 0,
    marginTop: 32,
    paddingBottom: 64,
    alignItems: 'center',
    flex: 10,
  },
  outerCircle: {
    position: 'relative',
    alignSelf: 'center',
    borderRadius: wp('22.2%'),
    width: wp('44.4%'),
    height: wp('44.4%'),
    borderColor: '#a1ffeb',
    borderWidth: 2,
  },
  innerCircle: {
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: wp('12%'),
    width: wp('24%'),
    height: wp('24%'),
  },
  pausePlayIcon: {
    position: 'absolute',
    zIndex: 3,
    fontSize: wp('12%'),
    width: wp('12%'),
    height: wp('12%'),
    top: wp('16%'),
    left: wp('24%') + wp('18%') - 12,
  },
  contacts: {
    color: '#595959',
    fontSize: 18,
    marginTop: 32,
    textAlign: 'center',
    fontFamily: 'Ubuntu-B',
  },
  bottomButtonContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  IDMatchPopup: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    padding: 16,
    zIndex: 2,
  },
  IDMatchText: {
    fontFamily: 'Ubuntu-R',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  pausedText: {
    position: 'absolute',
    marginTop: wp('36%'),
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
    color: '#595959',
  },
  visible: {opacity: 1},
  invisible: {opacity: 0},
  popup: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
  },
});

const stylesNoContacts = StyleSheet.create({
  innerCircle: {
    backgroundColor: '#7dc6b6',
  },
  outerCircle: {
    backgroundColor: 'rgba(135, 202, 187, 0.2)',
  },
  contacts: {},
});

const stylesFewContacts = StyleSheet.create({
  innerCircle: {
    backgroundColor: '#7dc6b6',
  },
  outerCircle: {
    backgroundColor: 'rgba(136, 202, 187, 0.4)',
  },
  contacts: {},
});

const stylesManyContacts = StyleSheet.create({
  innerCircle: {
    backgroundColor: '#7dc6b6',
  },
  outerCircle: {
    backgroundColor: 'rgba(135, 202, 187, 0.6)',
  },
  contacts: {},
});

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home: React.FC<{
  navigation: HomeScreenNavigationProp;
}> = ({navigation}) => {
  const {t} = useTranslation();
  const [distances, setDistances] = useState<never[]>([]);
  const [showIDMatch, setIDMatchShow] = useState<boolean>(false);
  const [hasSeenIDMatch, setIDMatchSeen] = useState<boolean>(false);
  const emitter = useRef<NativeEventEmitter | null>(null);
  const latestFetchTime = NativeModules.ItoBluetooth.getLatestFetchTime();
  console.log('Latest fetch time:', latestFetchTime);
  const latestFetchDate =
    latestFetchTime === -1 ? null : new Date(latestFetchTime * 1000);
  const latestFetch =
    latestFetchDate === null
      ? t('home.never')
      : `${t('home.today')} ${latestFetchDate.toTimeString().substr(0, 5)}`;
  useEffect(() => {
    console.log('Setting distance event listener');
    emitter.current = new NativeEventEmitter(NativeModules.ItoBluetooth);
    const listener = (ds: never[]): void => {
      console.log('Distances changed:', ds);
      setDistances(ds);
    };
    emitter.current.addListener('onDistancesChanged', listener);
    return (): void => {
      if (emitter.current) {
        emitter.current.removeListener('onDistancesChanged', listener);
        emitter.current = null;
      }
    };
  }, [distances.length]);

  useEffect(() => {
    function refresh(): void {
      if (NativeModules.ItoBluetooth.isPossiblyInfected() && !hasSeenIDMatch) {
        setIDMatchShow(true);
      }
    }
    const interval = setInterval(refresh, 2500);
    return (): void => clearInterval(interval);
  }, [navigation, hasSeenIDMatch]);

  const closeIDMatch = (): void => {
    setIDMatchShow(false);
    setIDMatchSeen(true);
  };

  const closeDistances = distances.filter((d) => d <= 1.5);
  const furtherDistances = distances.filter((d) => d > 1.5 && d <= 5);
  // let contactDescription;
  let contactStyles;
  if (distances.length === 0) {
    contactStyles = stylesNoContacts;
    // contactDescription = 'no contacts around you';
  } else if (distances.length <= 3) {
    contactStyles = stylesFewContacts;
    // contactDescription = 'just a few contacts around you';
  } else {
    contactStyles = stylesManyContacts;
    // contactDescription = 'many contacts around you';
  }
  let innerCircleStyle;
  if (closeDistances.length < 1) {
    innerCircleStyle = StyleSheet.flatten([
      styles.innerCircle,
      stylesNoContacts.innerCircle,
    ]);
  } else if (closeDistances.length >= 1 && closeDistances.length < 5) {
    innerCircleStyle = StyleSheet.flatten([
      styles.innerCircle,
      stylesFewContacts.innerCircle,
    ]);
  } else {
    innerCircleStyle = StyleSheet.flatten([
      styles.innerCircle,
      stylesManyContacts.innerCircle,
    ]);
  }
  let outerCircleStyle;
  if (closeDistances.length >= 1) {
    outerCircleStyle = StyleSheet.flatten([
      styles.outerCircle,
      stylesManyContacts.outerCircle,
    ]);
  } else if (furtherDistances.length < 1) {
    outerCircleStyle = StyleSheet.flatten([
      styles.outerCircle,
      stylesNoContacts.outerCircle,
    ]);
  } else if (furtherDistances.length >= 1 && furtherDistances.length < 5) {
    outerCircleStyle = StyleSheet.flatten([
      styles.outerCircle,
      stylesFewContacts.outerCircle,
    ]);
  } else {
    outerCircleStyle = StyleSheet.flatten([
      styles.outerCircle,
      stylesManyContacts.outerCircle,
    ]);
  }
  const contactsStyle = StyleSheet.flatten([
    styles.contacts,
    contactStyles.contacts,
  ]);
  const avgDistance = distances.length
    ? distances.reduce((prev, cur) => prev + cur, 0) / distances.length
    : null;
  const innerCircleDiameter =
    avgDistance === null
      ? wp('35.26%')
      : wp('44.4%') - Math.min(wp('44.4%'), Math.sqrt(avgDistance) * wp('6%'));

  const [isBLERunning, setIsBLERunning] = useState(true);

  return (
    <TouchableWithoutFeedback>
      <View style={global.container}>
        {showIDMatch && (
          <BlurBackground>
            <View style={styles.IDMatchPopup}>
              <Text style={styles.IDMatchText}>
                {t('home.alertContactDiscovered')}
              </Text>
              <BasicButton title={t('home.whatNext')} onPress={closeIDMatch} />
            </View>
          </BlurBackground>
        )}
        <Header />
        <View style={styles.lastFetchRow}>
          <Text style={styles.lastFetch}>
            {t('home.lastIdFetch')}: {latestFetch}
          </Text>
          <Icon name="refresh-ccw" size={18} style={styles.refreshIcon} />
        </View>
        <View style={styles.circlesContainer}>
          <Icon
            name={isBLERunning ? 'pause-circle' : 'play-circle'}
            style={styles.pausePlayIcon}
            onPress={(): void => setIsBLERunning(!isBLERunning)}
          />
          <View
            style={[
              innerCircleStyle,
              {
                width: innerCircleDiameter,
                height: innerCircleDiameter,
                borderRadius: innerCircleDiameter / 2,
                top: wp('22%') - innerCircleDiameter / 2,
                left: (wp('100%') - 32 - innerCircleDiameter) / 2,
              },
              isBLERunning ? styles.visible : styles.invisible,
            ]}
          />
          <Text
            style={[
              styles.pausedText,
              isBLERunning ? styles.invisible : styles.visible,
            ]}>
            ito is paused {'\n'}
            <Text style={{fontStyle: 'italic'}}>
              press to resume collection now
            </Text>
          </Text>
          <View
            style={[
              outerCircleStyle,
              isBLERunning ? styles.visible : styles.invisible,
            ]}
          />
        </View>
        <Text
          style={[
            contactsStyle,
            isBLERunning ? styles.visible : styles.invisible,
          ]}>{`${distances.length} ${t('home.contacts')} (avg: ${
          avgDistance === null ? 'n/a' : `${avgDistance.toPrecision(2)}m`
        })`}</Text>
        <ButtonPopup
          style={styles.popup}
          button={{
            fn: () => {
              navigation.navigate('Endangerment');
            },
            title: t('home.popup_info.button'),
          }}>
          <Text>{t('home.popup_info.text')}</Text>
        </ButtonPopup>
        <BottomMenu navigation={navigation} activate="Tracing"></BottomMenu>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
