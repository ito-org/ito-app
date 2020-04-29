import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {colorPaletteMintGrey, wPercent, hPercent} from '../styles/style-v3';

const global = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.45,
    textAlign: 'center',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignSelf: 'baseline',
  },
});

const circRad = {
  c1: wPercent(1.125) / 2,
  c2: wPercent(0.825) / 2,
  c3: wPercent(0.5) / 2,
};

const svg = {
  cx: hPercent(global.row.flex) / 2,
};

const radar = {
  circle1: {
    r: circRad.c1,
    cx: wPercent(0.5),
    cy: svg.cx,
    stroke: colorPaletteMintGrey.primary500,
    strokeOpacity: 0.3,
  },
  circle2: {
    r: circRad.c2,
    cx: wPercent(0.5),
    cy: svg.cx,
    stroke: colorPaletteMintGrey.primary500,
    strokeOpacity: 0.12,
  },
  circle3: {
    r: circRad.c3,
    cx: wPercent(0.5),
    cy: svg.cx,
    stroke: colorPaletteMintGrey.primary500,
    strokeOpacity: 0.0,
  },
  circle5: {
    r: wPercent(0.05),
    cx: wPercent(0.5),
    cy: svg.cx,
    stroke: '#FFF',
  },
};

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home: React.FC<{navigation: HomeScreenProp}> = ({navigation}) => {
  console.log(radar);
  return (
    <View style={[global.row]}>
      <View style={global.col}>
        <Svg style={global.center}>
          <Circle
            cx={radar.circle1.cx}
            cy={radar.circle1.cy}
            r={radar.circle1.r}
            stroke={radar.circle1.stroke}
            stroke-opacity={radar.circle1.strokeOpacity}
          />
          <Circle
            cx={radar.circle2.cx}
            cy={radar.circle2.cy}
            r={radar.circle2.r}
            stroke={radar.circle2.stroke}
            stroke-opacity={radar.circle2.strokeOpacity}
          />
          <Circle
            cx={radar.circle3.cx}
            cy={radar.circle3.cy}
            r={radar.circle3.r}
            stroke={radar.circle3.stroke}
            stroke-opacity={radar.circle3.strokeOpacity}
          />
          <Circle
            cx={radar.circle5.cx}
            cy={radar.circle5.cy}
            r={radar.circle5.r}
            stroke={radar.circle5.stroke}
            fill={colorPaletteMintGrey.primary500}
          />
        </Svg>
      </View>
    </View>
  );
};
