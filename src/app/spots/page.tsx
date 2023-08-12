import { Fragment } from 'react';
import { SleepBlock } from '~/client/components/SleepBlock';
import { ClientQueryBlockForGetSpots } from '~/client/components/ClientQueryBlockForGetSpots';
import { ServerQueryBlockForGetUsers } from '~/client/components/ServerQueryBlockForGetSpot';
import { SpotTile } from '~/client/components/SpotTile';
import { GET_SPOTS } from '~/client/services/graphql/queries/spotQuery';
import { getClient } from '~/services/apolloForRSC';

const Spots = async () => {
  // const { data, loading, error } = await getClient().query({ query: GET_SPOTS });

  // if (loading) return <p>loading</p>;

  // if (error || !data) return <p>ERROR</p>;

  return (
    <Fragment>
      <h1>Spots</h1>
      <SleepBlock />
      <ClientQueryBlockForGetSpots>
        <ServerQueryBlockForGetUsers />
      </ClientQueryBlockForGetSpots>
      {/* {data.spots &&
        data.spots.spots &&
        data.spots.spots.map((spot: any) => <SpotTile key={spot.id} spot={spot} />)} */}
    </Fragment>
  );
};

export default Spots;
