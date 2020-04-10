import React from 'react';
import {StyleSheet, View, Text, PermissionsAndroid} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import ShieldIcon2 from '../components/ShieldIcon2';
import AlphaNotice from '../components/AlphaNotice';
import transform from 'react-native';
import {RootStackParamList} from 'App/App';
import {StackNavigationProp} from '@react-navigation/stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#595959',
  },
  logo: {
    color: '#7dc6b6',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
    marginBottom: 8,
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  buttonHow: {
    backgroundColor: '#91e6d3',
    borderRadius: 6,
    paddingTop: 8,
    paddingBottom: 8,
  },
  buttonHowTitle: {
    color: '#2c2c2c',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
  explanationRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
    alignItems: 'center',
    paddingTop: 24,
  },
  explanation: {
    color: '#595959',
    textAlign: 'left',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 38,
    fontFamily: 'Ubuntu-R',
  },
});

type OnboardingHowScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OnboardingHow'
>;

export function OnboardingHow({
  navigation,
}: {
  navigation: OnboardingHowScreenNavigationProp;
}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
        }}>
        <Text style={styles.logo}>ito</Text>
        <AlphaNotice
          rootStyle={{
            position: 'absolute',
            top: 12,
            left: 48,
            padding: 0,
          }}
          textStyle={{
            fontSize: 14,
            lineHeight: 14,
          }}
        />
      </View>
      <View style={styles.explanationRow}>
        <Icon
          name="bluetooth"
          size={40}
          color="white"
          style={{
            marginTop: -28,
            marginRight: 16,
            borderRadius: 60,
            color: '#fff',
            padding: 12,
            backgroundColor: '#7dc6b6',
          }}
        />
        <Text style={styles.explanation}>
          we use your phone's bluetooth{'\n'}
          to let your phone see every{'\n'}
          other ito user around you
        </Text>
      </View>
      <View style={styles.explanationRow}>
        <Text style={styles.explanation}>
          your phone saves which other{'\n'}
          phones you encountered. this{'\n'}
          data is just on your phone
        </Text>
        <Icon
          name="smartphone"
          size={40}
          color="white"
          style={{
            marginTop: -20,
            marginLeft: 16,
            borderRadius: 60,
            color: '#fff',
            padding: 12,
            backgroundColor: '#7dc6b6',
          }}
        />
      </View>
      <View style={styles.explanationRow}>
        <Icon
          name="bell"
          size={40}
          color="white"
          style={{
            marginTop: -20,
            marginRight: 16,
            borderRadius: 60,
            color: '#fff',
            padding: 12,
            backgroundColor: '#7dc6b6',
          }}
        />
        <Text style={styles.explanation}>
          if someone you encountered{'\n'}
          before got infected, you get a{'\n'}
          notification with information{'\n'}
          on what to do
        </Text>
      </View>
      <View style={styles.explanationRow}>
        <Text style={styles.explanation}>
          if you got infected and tested{'\n'}
          positive you can let everybody{'\n'}
          you encountered lately know
        </Text>
        <ShieldIcon2
          style={{
            marginTop: -32,
            marginLeft: 16,
            borderRadius: 60,
            color: '#fff',
            padding: 0,
            backgroundColor: '#7dc6b6',
          }}
          height={68}
          width={68}
          viewBox="0 -32 120 180"
        />
      </View>
      <View style={styles.bottomButtonContainer}>
        <Button
          title="Get Started"
          onPress={() => {
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: 'ReactNativeCode Location Permission',
                message: 'ReactNativeCode App needs access to your location ',
              },
            );
            navigation.navigate('HomeTour1');
          }}
          titleStyle={styles.buttonHowTitle}
          buttonStyle={styles.buttonHow}
        />
      </View>
    </View>
  );
}
