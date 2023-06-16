import { countRocket } from "../../../02_Zadanie/js/redux/actions";

// Tutaj zaimplementuj akcje
const LAUNCH_ROCKET = "LAUNCH_ROCKET";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

const startLaunching = () => (dispatch) => {
  let i = 0;
  const myInterval = setInterval(() => {
    if (i < 5) {
      dispatch(decrementCounter());
      i++;
    } else {
      dispatch(launchRocket());
      clearInterval(myInterval);
    }
  }, 1000);
};

const launchRocket = () => {
  return {
    type: LAUNCH_ROCKET,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

export {
  launchRocket,
  decrementCounter,
  startLaunching,
  LAUNCH_ROCKET,
  DECREMENT_COUNTER,
};
