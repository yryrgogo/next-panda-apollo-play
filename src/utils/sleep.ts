const sleep = (ms: number) => {
  console.log(`Sleeping for ${ms}ms`);

  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`Slept for ${ms}ms`);
      resolve(true);
    }, ms),
  );
};

export { sleep };
