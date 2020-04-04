import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    flex: 1,
    backgroundColor: '#9fc85b',
    textAlign: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
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
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
    marginBottom: 32,
  },
  bottomButtonContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  buttonInfected: {
    backgroundColor: '#9fc85b',
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
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  radius3: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
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
  contacts: {
    fontFamily: 'Ubuntu-B',
  },
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
  contacts: {
    fontFamily: 'Ubuntu-B',
    fontSize: 16,
  },
});

export function Home({navigation}) {
  const [contacts, setContactCount] = useState(0);
  let contactStyles;
  let contactDescription;
  if (contacts === 0) {
    contactStyles = stylesNoContacts;
    contactDescription = 'no contacts around you';
  } else if (contacts <= 3) {
    contactStyles = stylesFewContacts;
    contactDescription = 'just a few contacts around you';
  } else {
    contactStyles = stylesManyContacts;
    contactDescription = 'many contacts around you';
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
  );
}
export default Home;
