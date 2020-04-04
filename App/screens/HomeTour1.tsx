import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Button, withTheme} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    textAlign: 'center',
    backgroundColor: 'hsl(224, 51%, 38%)',
  },
  logo: {
    color: 'hsl(0, 0%, 90%)',
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
    color: 'hsl(0, 0%, 90%)',
    fontSize: 16,
    fontFamily: 'Ubuntu-R',
    marginRight: 8,
  },
  refreshIcon: {
    color: 'hsl(0, 0%, 90%)',
  },
  bubbleBoxContainer: {
    position: 'relative',
    flex: 1,
    marginLeft: 18,
    marginRight: 18,
    marginBottom: -40,
  },
  bubbleBox: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    paddingTop: 6,
    paddingBottom: 6,
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
  next: {
    fontFamily: 'Ubuntu-R',
    color: 'hsl(224, 61%, 58%)',
  },
  nextIcon: {
    color: 'hsl(224, 61%, 58%)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
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
    color: 'hsl(0, 0%, 80%)',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Ubuntu-B',
    marginBottom: 32,
  },
  bottomButtonContainer: {
    flex: 1.7,
    justifyContent: 'flex-end',
    backgroundColor: 'hsl(0, 0%, 70%)',
  },
  buttonInfected: {
    backgroundColor: 'hsl(224, 51%, 38%)',
    borderRadius: 6,
    marginBottom: 24,
    marginLeft: 16,
    marginRight: 16,
    padding: 12,
  },
  buttonInfectedTitle: {
    color: 'hsl(0, 0%, 80%)',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
});

export function HomeTour1({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ito</Text>
      <View style={styles.lastFetchRow}>
        <Text style={styles.lastFetch}>Last ID fetch: today 11:04</Text>
        <Icon name="refresh-ccw" size={18} style={styles.refreshIcon} />
      </View>
      <View style={styles.bubbleBoxContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('HomeTour2')}>
          <View style={styles.bubbleBox}>
            <Text style={styles.bubbleText}>
              This circle shows you how many ito users you just encountered.
              Don't worry, it's just an indicator to see if you are in the
              middle of a lot of ito users or not.
            </Text>
            <View style={styles.bubbleActions}>
              <Text style={styles.next}>next</Text>
              <Icon name="chevron-right" size={18} style={styles.nextIcon} />
            </View>
            <View style={styles.bubbleTriangle} />
          </View>
        </TouchableWithoutFeedback>
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
    </View>
  );
}
export default HomeTour1;
