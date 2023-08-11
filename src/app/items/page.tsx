import { useQuery } from '@apollo/client';

import { SpotTile } from '~/client/components/SpotTile';
import { GET_SPOT } from '~/client/services/spotService';

const Spot = (props: { spotId: string }) => {
  const { data, loading, error } = useQuery(GET_SPOT, { variables: { spotId: props.spotId } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;
  return data.spot && <SpotTile spot={data.spot} />;
};

export { Spot };
