import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ShieldIcon2(props: any) {
  return (
    <Svg width={78} height={78} fill="white" {...props}>
      <Path
        d="M56.51 108.074a6.875 6.875 0 006.98 0C73.23 102.392 100 84.542 100 60V30.544a8 8 0 00-5.191-7.49l-32-12a8 8 0 00-5.618 0l-32 12A8 8 0 0020 30.543V60c0 24.542 26.77 42.392 36.51 48.074z"
        stroke="white"
        strokeWidth={14}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        stroke="white"
        strokeWidth={0}
        d="M100 60c0 30-40 50-40 50S20 90 20 60V25l40-15 40 15v35zM63 37.25V53h15.75v6H63v15.75h-6V59H41.25v-6H57V37.25h6z"
        fill="#7dc6b6"
      />
    </Svg>
  );
}

export default ShieldIcon2;
