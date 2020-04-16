import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FF3E3E',
  },
  text: {
    color: 'white',
    fontFamily: 'UbuntuMono-R',
    padding: 4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

interface AlphaNoticeProps {
  rootStyle: object;
  textStyle: object;
}

export const AlphaNotice: React.FC<AlphaNoticeProps> = ({
  rootStyle = {},
  textStyle = {},
  ...other
}) => {
  return (
    <View style={[styles.root, rootStyle]} {...other}>
      <Text style={[styles.text, textStyle]}>alpha</Text>
    </View>
  );
};
export default AlphaNotice;
