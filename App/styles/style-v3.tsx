import {StyleSheet, Dimensions} from 'react-native';

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

const width: number = Dimensions.get('window').width;
const height: number = Dimensions.get('window').height;
export const wPercent = (flexVal: number) => {
  return flexVal * width;
};

export const hPercent = (flexVal: number) => {
  return flexVal * height;
};
