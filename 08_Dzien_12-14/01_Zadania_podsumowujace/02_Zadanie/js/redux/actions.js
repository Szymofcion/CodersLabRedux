// Tutaj zaimplementuj akcje

export const COUNT_ROCKET = "COUNT_ROCKET";
export const LAUNCHED_ROCKET = "LAUNCHED_ROCKET";

export const startLaunching = () => (dispatch) => {
  let i = 0;
  const myInterval = setInterval(() => {
    if (i < 5) {
      dispatch(countRocket());
      i++;
    } else {
      dispatch(launchedRocket());
      clearInterval(myInterval);
    }
  }, 1000);
};

export const countRocket = () => ({
  type: COUNT_ROCKET,
});

export const launchedRocket = () => ({
  type: LAUNCHED_ROCKET,
});
