import {StyleSheet} from 'react-native';

export const global = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#595959',
    justifyContent: 'space-between',
  },
});
export default global;

export const design = {
  explanation: {
    fontSize: 18,
    color: '#595959',
    fontFamily: 'Ubuntu-R',
  },
  coloredButton: {
    backgroundColor: '#91e6d3',

    borderRadius: 6,
    padding: 12,
  },
  inversedButton: {
    backgroundColor: '#ffffff',
    borderColor: '#7dc6b6',
    borderWidth: 2,
    borderRadius: 6,
    padding: 12,
    color: '#2c2c2c',
  },
  buttonText: {
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
  buttonOpenAppTitle: {
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
};
