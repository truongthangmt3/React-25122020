import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const HomeIcon = ({ color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23.998}
      height={24}
      viewBox="0 0 23.998 24"
    >
      <Path
        d="M23.353 10.439L13.561.648a2.209 2.209 0 00-3.125 0L.651 10.432l-.01.01a2.208 2.208 0 001.47 3.764h.458v7.2a2.589 2.589 0 002.587 2.595h3.83a.7.7 0 00.7-.7v-5.652a1.181 1.181 0 011.18-1.18h2.259a1.181 1.181 0 011.18 1.18v5.652a.7.7 0 00.7.7h3.83a2.589 2.589 0 002.586-2.586v-7.2h.362a2.21 2.21 0 001.564-3.771zm0 0"
        fill={color}
      />
    </Svg>
  );
};

export default HomeIcon;
