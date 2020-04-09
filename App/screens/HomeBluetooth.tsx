import React, {useState, useEffect} from 'react';
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
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'App/App';

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    flex: 1,
    backgroundColor: 'hsl(224, 71%, 58%)',
    textAlign: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
    marginBottom: 16,
  },
  lastFetchRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lastFetch: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
    marginBottom: 8,
    marginRight: 8,
  },
  refreshIcon: {
    color: 'white',
  },
  radiusContainer: {
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  radius1: {
    position: 'absolute',
    top: 120,
    borderRadius: 50,
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  radius2: {
    position: 'absolute',
    top: 60,
    borderRadius: 110,
    width: 220,
    height: 220,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  radius3: {
    borderRadius: 170,
    width: 340,
    height: 340,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  contacts: {
    color: 'white',
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
    backgroundColor: '#4770e0',
    borderRadius: 6,
    marginBottom: 24,
    marginLeft: 16,
    marginRight: 16,
    padding: 12,
  },
  buttonInfectedTitle: {
    color: 'white',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
});

const stylesNoContacts = StyleSheet.create({
  radius1: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  radius2: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  radius3: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  contacts: {},
});

const stylesFewContacts = StyleSheet.create({
  radius1: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
  },
  radius2: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
  },
  radius3: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
  },
  contacts: {},
});

const stylesManyContacts = StyleSheet.create({
  radius1: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  radius2: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  radius3: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  contacts: {},
});

type HomeBluetoothScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeBluetooth'>

export function HomeBluetooth({navigation}: {navigation: HomeBluetoothScreenNavigationProp}) {
  const [distances, setDistances] = useState([]);
  useEffect(() => {
    console.log('Setting distance event listener');
    const eventEmitter = new NativeEventEmitter(NativeModules.ItoBluetooth);
    const eventListener = eventEmitter.addListener(
      'onDistancesChanged',
      (distances) => {
        console.log('distances changed', distances);
        setDistances(distances);
      },
    );
  }, []);
  const radius1Count = distances.filter((d) => d <= 2).length;
  const radius2Count = distances.filter((d) => d > 2 && d <= 5).length;
  const radius3Count = distances.filter((d) => d > 5).length;
  let contactDescription;
  let contactStyles;
  if (distances.length === 0) {
    contactStyles = stylesNoContacts;
    contactDescription = 'no contacts around you';
  } else if (distances.length <= 3) {
    contactStyles = stylesFewContacts;
    contactDescription = 'just a few contacts around you';
  } else {
    contactStyles = stylesManyContacts;
    contactDescription = 'many contacts around you';
  }
  let radius1Style;
  if (radius1Count < 1) {
    radius1Style = StyleSheet.flatten([
      styles.radius1,
      stylesNoContacts.radius1,
    ]);
  } else {
    radius1Style = StyleSheet.flatten([
      styles.radius1,
      stylesManyContacts.radius1,
    ]);
  }
  let radius2Style;
  if (radius2Count < 1) {
    radius2Style = StyleSheet.flatten([
      styles.radius2,
      stylesNoContacts.radius2,
    ]);
  } else {
    radius2Style = StyleSheet.flatten([
      styles.radius2,
      stylesManyContacts.radius2,
    ]);
  }
  let radius3Style;
  if (radius3Count < 1) {
    radius3Style = StyleSheet.flatten([
      styles.radius3,
      stylesNoContacts.radius3,
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
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
      <View style={styles.container}>
        <Text style={styles.logo}>ito</Text>
        <View style={styles.lastFetchRow}>
          <Text style={styles.lastFetch}>Last ID fetch: today 11:04</Text>
          <Icon name="refresh-ccw" size={18} style={styles.refreshIcon} />
        </View>
        <View style={styles.radiusContainer}>
          <Text style={radius1Style} />
          <Text style={radius2Style} />
          <Text style={radius3Style} />
        </View>
        <Text style={contactsStyle}>{contactDescription}</Text>
        <View style={styles.bottomButtonContainer}>
          <Button
            title="I think I'm infected"
            onPress={() => navigation.navigate('Endangerment')}
            titleStyle={styles.buttonInfectedTitle}
            buttonStyle={styles.buttonInfected}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default HomeBluetooth;
