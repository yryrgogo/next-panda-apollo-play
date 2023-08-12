'use client';
import { useQuery } from '@apollo/client/react';
import { useState } from 'react';
import { GET_SPOTS } from '~/client/services/graphql/queries/spotQuery';
import { css } from '~/client/styled-system/css';

const ClientQueryBlockForGetSpots = (props: { children: React.ReactNode }) => {
  const { data, loading, error } = useQuery<any, any>(GET_SPOTS);
  const [count, setCount] = useState(0);

  return (
    <div
      className={css({
        bgColor: 'red',
        p: 4,
        fontSize: 18,
      })}
    >
      <h1>ClientQueryBlockForGetSpots</h1>
      <button
        className={css({
          bgColor: 'green',
          p: 4,
          fontSize: 18,
        })}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}+1
      </button>
      {loading && <p>loading</p>}
      {error && <p>ERROR</p>}
      {data && data.spots && data.spots.spots && <p>{data.spots.spots.length}</p>}
      {/* <button onClick={fetchUser}>ユーザー取得（getClient().query()）</button> */}
      {props.children}
    </div>
  );
};

export { ClientQueryBlockForGetSpots };
