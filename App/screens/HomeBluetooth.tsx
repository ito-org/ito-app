import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import Header from '../components/Header';

import {global} from '../styles';

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
  radiusContainer: {
    margin: 0,
    paddingTop: 16,
    paddingBottom: 64,
    alignItems: 'center',
    flex: 10,
  },
  radius1: {
    position: 'absolute',
    top: 135,
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  radius2: {
    position: 'absolute',
    top: 80,
    borderRadius: 110,
    width: 220,
    height: 220,
  },
  radius3: {
    borderRadius: 170,
    width: 340,
    height: 340,
  },
  contacts: {
    color: '#595959',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Ubuntu-B',
    marginBottom: 32,
  },
  bottomButtonContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  buttonInfected: {
    backgroundColor: '#91e6d3',
    borderRadius: 6,
    marginBottom: 24,
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

const stylesNoContacts = StyleSheet.create({
  radius1: {
    backgroundColor: '#7dc6b6',
  },
  radius2: {
    backgroundColor: 'rgba(135, 202, 187, 0.2)',
  },
  radius3: {
    backgroundColor: 'rgba(133, 201, 186, 0.2)',
  },
  contacts: {},
});

const stylesFewContacts = StyleSheet.create({
  radius1: {
    backgroundColor: '#7dc6b6',
  },
  radius2: {
    backgroundColor: 'rgba(136, 202, 187, 0.4)',
  },
  radius3: {
    backgroundColor: 'rgba(136, 202, 187, 0.2)',
  },
  contacts: {},
});

const stylesManyContacts = StyleSheet.create({
  radius1: {
    backgroundColor: '#7dc6b6',
  },
  radius2: {
    backgroundColor: 'rgba(135, 202, 187, 0.6)',
  },
  radius3: {
    backgroundColor: 'rgba(136, 202, 187, 0.4)',
  },
  contacts: {},
});

type HomeBluetoothScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeBluetooth'
>;

export const HomeBluetooth: React.FC<{
  navigation: HomeBluetoothScreenNavigationProp;
}> = ({navigation}) => {
  const [distances, setDistances] = useState<never[]>([]);
  const emitter = useRef<NativeEventEmitter | null>(null);
  useEffect(() => {
    console.log('Setting distance event listener');
    emitter.current = new NativeEventEmitter(NativeModules.ItoBluetooth);
    const listener = (ds: never[]): void => {
      console.log('distances changed', ds);
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
  const r1Distances = distances.filter((d) => d <= 1.5);
  const r2Distances = distances.filter((d) => d > 1.5 && d <= 5);
  const r3Distances = distances.filter((d) => d > 5);
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
  let radius1Style;
  if (r1Distances.length < 1) {
    radius1Style = StyleSheet.flatten([
      styles.radius1,
      stylesNoContacts.radius1,
    ]);
  } else if (r1Distances.length >= 1 && r1Distances.length < 5) {
    radius1Style = StyleSheet.flatten([
      styles.radius1,
      stylesFewContacts.radius1,
    ]);
  } else {
    radius1Style = StyleSheet.flatten([
      styles.radius1,
      stylesManyContacts.radius1,
    ]);
  }
  let radius2Style;
  if (r1Distances.length >= 1) {
    radius2Style = StyleSheet.flatten([
      styles.radius2,
      stylesManyContacts.radius2,
    ]);
  } else if (r2Distances.length < 1) {
    radius2Style = StyleSheet.flatten([
      styles.radius2,
      stylesNoContacts.radius2,
    ]);
  } else if (r2Distances.length >= 1 && r2Distances.length < 5) {
    radius2Style = StyleSheet.flatten([
      styles.radius2,
      stylesFewContacts.radius2,
    ]);
  } else {
    radius2Style = StyleSheet.flatten([
      styles.radius2,
      stylesManyContacts.radius2,
    ]);
  }
  let radius3Style;
  if (r3Distances.length < 1) {
    radius3Style = StyleSheet.flatten([
      styles.radius3,
      stylesNoContacts.radius3,
    ]);
  } else if (r3Distances.length >= 1 && r3Distances.length < 5) {
    radius3Style = StyleSheet.flatten([
      styles.radius3,
      stylesFewContacts.radius3,
    ]);
  } else {
    radius3Style = StyleSheet.flatten([
      styles.radius3,
      stylesManyContacts.radius3,
    ]);
  }
  const contactsStyle = StyleSheet.flatten([
    styles.contacts,
    contactStyles.contacts,
  ]);
  const avgDistance = distances.length
    ? distances.reduce((prev, cur) => prev + cur, 0) / distances.length
    : null;
  const circle2Diameter =
    avgDistance === null ? 220 : 80 + Math.cbrt(avgDistance) * 100;
  return (
    <TouchableWithoutFeedback>
      <View style={global.container}>
        <Header showHelp={true} />
        <View style={styles.lastFetchRow}>
          <Text style={styles.lastFetch}>Last ID fetch: today 11:04</Text>
          <Icon name="refresh-ccw" size={18} style={styles.refreshIcon} />
        </View>
        <View style={styles.radiusContainer}>
          <Text style={radius1Style} />
          <Text
            style={[
              radius2Style,
              {
                width: circle2Diameter,
                height: circle2Diameter,
                borderRadius: circle2Diameter / 2,
                top: 185 - circle2Diameter / 2,
              },
            ]}
          />
          <Text style={radius3Style} />
        </View>
        <Text style={contactsStyle}>{`${distances.length} contacts (avg: ${
          avgDistance === null ? 'n/a' : `${avgDistance.toPrecision(2)}m`
        })`}</Text>
        <Button
          title="I think I'm infected"
          onPress={(): void => {
            navigation.navigate('Endangerment');
            console.log(NativeModules.ItoBluetooth);
            console.log(
              'latestFetchTime',
              NativeModules.ItoBluetooth.getLatestFetchTime(),
            );
          }}
          titleStyle={styles.buttonInfectedTitle}
          buttonStyle={styles.buttonInfected}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default HomeBluetooth;
