import React, {useRef, useEffect, useState} from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  NativeModules,
  NativeEventEmitter,
  EmitterSubscription,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';

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
    alignItems: 'baseline',
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

const RefreshView = (props) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const rotateProp = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });

  React.useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [{rotate: rotateProp}, {perspective: 1000}],
      }}>
      {props.children}
    </Animated.View>
  );
};

const stylesNoContacts = StyleSheet.create({
  radius1: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  radius2: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  radius3: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  contacts: {},
});

const stylesFewContacts = StyleSheet.create({
  radius1: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
  },
  radius2: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  radius3: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  contacts: {},
});

const stylesManyContacts = StyleSheet.create({
  radius1: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  radius2: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
  },
  radius3: {
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
  },
  contacts: {},
});

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Home({navigation}: {navigation: HomeScreenNavigationProp}) {
  const [distances, setDistances] = useState([]);
  const [description, setDescription] = useState('no contacts');
  let eventListener = useRef<EmitterSubscription | null>(null);
  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModules.ItoBluetooth);
    eventListener.current = eventEmitter.addListener(
      'onDistancesChanged',
      setDistances,
    );
    if (NativeModules.ItoBluetooth.isPossiblyInfected()) {
      setDescription(`INFECTED!! PANIC!! ${distances.length} contacts`);
    } else {
      setDescription(`nice. ${distances.length} contacts`);
    }
    return () => {
      eventEmitter.removeListener('onDistancesChanged', setDistances);
      eventListener.current = null;
    };
  }, [distances.length]);
  let contactStyles;
  if (distances.length === 0) {
    contactStyles = stylesNoContacts;
  } else if (distances.length <= 3) {
    contactStyles = stylesFewContacts;
  } else {
    contactStyles = stylesManyContacts;
  }
  const radius1Style = StyleSheet.flatten([
    styles.radius1,
    contactStyles.radius1,
  ]);
  const radius2Style = StyleSheet.flatten([
    styles.radius2,
    contactStyles.radius2,
  ]);
  const radius3Style = StyleSheet.flatten([
    styles.radius3,
    contactStyles.radius3,
  ]);
  const contactsStyle = StyleSheet.flatten([
    styles.contacts,
    contactStyles.contacts,
  ]);
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        console.log(NativeModules.ItoBluetooth.isPossiblyInfected())
      }>
      <View style={styles.container}>
        <Text style={styles.logo}>ito</Text>
        <View style={styles.lastFetchRow}>
          <Text style={styles.lastFetch}>Last ID fetch: today 11:04</Text>
          <RefreshView>
            <Icon name="refresh-ccw" size={18} style={styles.refreshIcon} />
          </RefreshView>
        </View>
        <View style={styles.radiusContainer}>
          <Text style={radius1Style} />
          <Text style={radius2Style} />
          <Text style={radius3Style} />
        </View>
        <Text style={contactsStyle}>{description}</Text>
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
export default Home;
