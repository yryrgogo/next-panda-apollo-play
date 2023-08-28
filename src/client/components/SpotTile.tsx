'use client';
import { useEffect, useState } from 'react';
import { css } from '~/client/styled-system/css';
import { VStack } from '~/client/styled-system/jsx';

import { Spot } from '~/models/spot';
import { SpotDescription } from './SpotDescription';

const SpotTile = ({ spot }: { spot: Spot }) => {
  const [hoge, setHoge] = useState('fuga');

  useEffect(() => {
    try {
      if (window) {
        console.log('window is defined');
        setHoge(window.location.href);
      }
    } catch (e) {
      console.log('window is not defined');
    }
  }, []);

  return (
    <VStack p={4} border="1px solid gray" borderRadius="lg">
      <h3
        className={css({
          color: 'blue',
        })}
      >
        {spot.name}
      </h3>
      <SpotDescription description={hoge} />
    </VStack>
  );
};

export { SpotTile };
