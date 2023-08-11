'use client';

import { useQuery } from '@apollo/client/react';
import { Fragment, useState } from 'react';
import { SpotTile } from '~/client/components/SpotTile';
import { GET_SPOTS } from '~/client/services/spotService';

const Spots = () => {
  const { data, loading, error, fetchMore } = useQuery<any, any>(GET_SPOTS);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  if (loading) return <p>loading</p>;

  if (error || !data) return <p>ERROR</p>;

  return (
    <Fragment>
      <p>header</p>
      {data.spots &&
        data.spots.spots &&
        data.spots.spots.map((spot: any) => <SpotTile key={spot.id} spot={spot} />)}
      {data.spots &&
        data.spots.hasMore &&
        (isLoadingMore ? (
          <p>loading</p>
        ) : (
          <button
            onClick={async () => {
              setIsLoadingMore(true);
              await fetchMore({
                variables: {},
              });
              setIsLoadingMore(false);
            }}
          >
            Load More
          </button>
        ))}
    </Fragment>
  );
};

export default Spots;
