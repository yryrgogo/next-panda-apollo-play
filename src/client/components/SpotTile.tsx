import { css } from '~/client/styled-system/css';
import { VStack } from '~/client/styled-system/jsx';

import { Spot } from '~/models/spot';

const SpotTile = ({ spot }: { spot: Spot }) => {
  return (
    <VStack p={4} border="1px solid gray" borderRadius="lg">
      <h3
        className={css({
          color: 'blue',
        })}
      >
        {spot.name}
      </h3>
      <p>{spot.description}</p>
    </VStack>
  );
};

export { SpotTile };
