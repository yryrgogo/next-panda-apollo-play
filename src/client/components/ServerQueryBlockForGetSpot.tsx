import { GET_USER } from '~/client/services/graphql/queries/userQuery';
import { css } from '~/client/styled-system/css';
import { getClient } from '~/services/apolloForRSC';

const ServerQueryBlockForGetUsers = async () => {
  const { data, loading, error } = await getClient().query({
    query: GET_USER,
    variables: {
      userId: '1',
    },
    fetchPolicy: 'no-cache',
  });

  setTimeout(() => {
    const res = getClient().readQuery({
      query: GET_USER,
      variables: {
        userId: '1',
      },
      // fetchPolicy: 'no-cache',
    });
    console.log('##### res', res);
  }, 3000);

  return (
    <div
      className={css({
        bgColor: 'red',
        p: 4,
        fontSize: 18,
      })}
    >
      <h1>ServerQueryBlockForGetUsers</h1>
      <p>Current Time: {Date.now()}</p>
      {loading && <p>loading</p>}
      {error && <p>ERROR</p>}
      {data && data.user && <p>{data.user.email}</p>}
    </div>
  );
};

export { ServerQueryBlockForGetUsers };
