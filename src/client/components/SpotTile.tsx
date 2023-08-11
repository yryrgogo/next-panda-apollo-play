import { css } from '~/client/styled-system/css';
import { VStack } from '~/client/styled-system/jsx';

import galaxy from '~/client/assets/images/galaxy.jpg';
import iss from '~/client/assets/images/iss.jpg';
import moon from '~/client/assets/images/moon.jpg';
import { Spot } from '~/models/spot';

const backgrounds = [galaxy, iss, moon];
export function getBackgroundImage(id: string) {
  return `url(${backgrounds[Number(id) % backgrounds.length]})`;
}

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

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const unit = 8;

export const cardClassName = css({
  padding: `${unit * 4}px ${unit * 5}px`,
  borderRadius: 7,
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
