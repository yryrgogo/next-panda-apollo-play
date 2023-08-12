import { css } from '~/client/styled-system/css';
import { sleep } from '~/utils/sleep';

const SleepBlock = async () => {
  sleep(10000).then(() => console.log('done'));

  return (
    <div
      className={css({
        bgColor: 'red',
        p: 4,
        fontSize: 18,
      })}
    >
      <h1>SleepBlock</h1>
    </div>
  );
};

export { SleepBlock };
