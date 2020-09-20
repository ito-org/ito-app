import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {NativeModules, StyleSheet, Text, View} from 'react-native';

import {global} from '../styles';
import {BlurBackground} from './BackgroundBlur';
import BasicButton from './BasicButton';

const styles = StyleSheet.create({
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
});

const RiskNotification: React.FC = () => {
  const [showIDMatch, setIDMatchShow] = useState<boolean>(false);
  const [hasSeenIDMatch, setIDMatchSeen] = useState<boolean>(false);
  const {t} = useTranslation();

  useEffect(() => {
    function refresh(): void {
      if (NativeModules.ItoBluetooth.isPossiblyInfected() && !hasSeenIDMatch) {
        setIDMatchShow(true);
      }
    }
    const interval = setInterval(refresh, 2500);
    return (): void => clearInterval(interval);
  }, [hasSeenIDMatch]);

  const closeIDMatch = (): void => {
    setIDMatchShow(false);
    setIDMatchSeen(true);
  };

  return (
    <View style={[global.container, {paddingBottom: 100}]}>
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
    </View>
  );
};

export default RiskNotification;
