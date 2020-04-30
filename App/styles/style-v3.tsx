import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Naming from design in figma
export const colorPaletteMintGrey = {
  primary500: '#7DC6B6',
  primary400: '#91E6D3',
  primary200: '#A1FFEB',
  grey900: '#2C2C2C',
  grey800: '#696969',
  grey300: '#E6E6E6',
  grey0: '#FFFFFF',
};

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
});

const width: number = Dimensions.get('window').width;
const height: number = Dimensions.get('window').height;
export const wPercent = (flexVal: number) => {
  return wp(flexVal * 100);
};

export const hPercent = (flexVal: number) => {
  return hp(flexVal * 100);
};
