import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const width: number = Dimensions.get('window').width;
const height: number = Dimensions.get('window').height;
export const wPercent = (flexVal: number) => {
  return wp(flexVal * 100);
};

export const hPercent = (flexVal: number) => {
  return hp(flexVal * 100);
};

/* color palette !not for use in other styles! */
const colorPaletteMintGrey = {
  primary500: '#7DC6B6',
  primary400: '#91E6D3',
  primary200: '#A1FFEB',
  grey900: '#2C2C2C',
  grey800: '#696969',
  grey300: '#E6E6E6',
  grey0: '#FFFFFF',
};

/* named color sets */
export const colors = {
  transparent: 'rgba(0,0,0,0)',
};

export const radarColors = {
  border: colorPaletteMintGrey.primary500,
  fill: colorPaletteMintGrey.primary500,
  gradientTo: colorPaletteMintGrey.grey0,
  gradientFrom: colorPaletteMintGrey.primary500,
};

export const textColors = {
  main: colorPaletteMintGrey.grey900,
  light: colorPaletteMintGrey.grey800,
};

export const buttonColors = {
  bg: colorPaletteMintGrey.grey300,
  fg: colorPaletteMintGrey.grey900,
};

/* general styles */
export const global = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  center: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  textSubtitle: {
    textAlign: 'center',
    fontSize: hPercent(0.03),
    fontFamily: 'Ubuntu',
  },
  textInfo: {
    textAlign: 'center',
    fontSize: hPercent(0.026),
    fontFamily: 'Ubuntu',
  },
});
