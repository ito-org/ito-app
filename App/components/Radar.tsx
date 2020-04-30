import React from 'react';
import {wPercent, colorPaletteMintGrey, hPercent} from '../styles/style-v3';
import Svg, {
  Circle,
  LinearGradient,
  Stop,
  Defs,
  RadialGradient,
} from 'react-native-svg';

const circRad = {
  c1: wPercent(1.125) / 2,
  c2: wPercent(0.825) / 2,
  c3: wPercent(0.5) / 2,
  c4: wPercent(0.25) / 2,
  c4inner: wPercent(0.0) / 2,
  c5: wPercent(0.075) / 2,
};

interface RadarProp {
  flexWidth: number;
}

export const Radar: React.FC<RadarProp> = ({flexWidth}) => {
  const svg = {
    cx: hPercent(flexWidth) / 2,
    cxOffset: hPercent(0.02),
  };

  const radar = {
    circle1: {
      r: circRad.c1,
      cx: wPercent(0.5),
      cy: svg.cx + svg.cxOffset,
      stroke: colorPaletteMintGrey.primary500,
      strokeOpacity: 0.12,
    },
    circle2: {
      r: circRad.c2,
      cx: wPercent(0.5),
      cy: svg.cx + svg.cxOffset,
      stroke: colorPaletteMintGrey.primary500,
      strokeOpacity: 0.25,
    },
    circle3: {
      r: circRad.c3,
      cx: wPercent(0.5),
      cy: svg.cx + svg.cxOffset,
      stroke: colorPaletteMintGrey.primary500,
      strokeOpacity: 0.5,
    },
    circle4: {
      r: circRad.c4,
      cx: wPercent(0.5),
      cy: svg.cx + svg.cxOffset,
      stroke: colorPaletteMintGrey.primary500,
      strokeWidth: circRad.c4 - circRad.c4inner,
      strokeOpacity: 1,
    },
    circle5: {
      r: wPercent(0.05),
      cx: wPercent(0.5),
      cy: svg.cx + svg.cxOffset,
      stroke: '#FFF',
      strokeWidth: 0,
    },
  };

  return (
    <Svg style={{backgroundColor: 'white'}}>
      <RadialGradient id="gradCirc5">
        <Stop offset="0%" stopColor={colorPaletteMintGrey.primary500} />
        <Stop offset="80%" stopColor={colorPaletteMintGrey.grey0} />
      </RadialGradient>

      <Circle
        cx={radar.circle1.cx}
        cy={radar.circle1.cy}
        r={radar.circle1.r}
        stroke={radar.circle1.stroke}
        strokeOpacity={radar.circle1.strokeOpacity}
      />
      <Circle
        cx={radar.circle2.cx}
        cy={radar.circle2.cy}
        r={radar.circle2.r}
        stroke={radar.circle2.stroke}
        strokeOpacity={radar.circle2.strokeOpacity}
      />
      <Circle
        cx={radar.circle3.cx}
        cy={radar.circle3.cy}
        r={radar.circle3.r}
        stroke={radar.circle3.stroke}
        strokeOpacity={radar.circle3.strokeOpacity}
      />
      <Circle
        cx={radar.circle4.cx}
        cy={radar.circle4.cy}
        r={radar.circle4.r}
        stroke="url(#gradCirc5)"
        strokeOpacity={radar.circle4.strokeOpacity}
        strokeWidth={radar.circle4.strokeWidth}
      />
      <Circle
        cx={radar.circle5.cx}
        cy={radar.circle5.cy}
        r={radar.circle5.r}
        strokeWidth={radar.circle5.strokeWidth}
        fill={colorPaletteMintGrey.primary500}
      />
    </Svg>
  );
};
