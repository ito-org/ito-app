import {StyleSheet} from 'react-native';

export const global = StyleSheet.create({
  container: {
    paddingTop: 8,
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
  alphaNoticeText: {
    fontSize: 14,
    lineHeight: 14,
  },
  logo: {
    color: '#7dc6b6',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
    marginBottom: 16,
  },
};
