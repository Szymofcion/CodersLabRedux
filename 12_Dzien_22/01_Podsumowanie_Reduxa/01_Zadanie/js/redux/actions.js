export const startCounter = () => {
  return {
    type: "START_COUNTER",
  };
};

export const stopCounter = () => {
  return {
    type: "STOP_COUNTER",
  };
};

export const addResult = (value) => {
  return {
    type: "ADD_RESULT",
    payload: value,
  };
};

export const startCounterAsync = () => {
  return (dispatch) => {
    const intervalId = setInterval(() => {
      dispatch(startCounter());
    }, 1000);

    dispatch({
      type: "SET_INTERVAL_ID",
      payload: intervalId,
    });
  };
};

export const stopCounterAsync = (intervalId) => {
  return (dispatch) => {
    clearInterval(intervalId);

    dispatch(stopCounter());
  };
};

export const removeNumber = (index) => {
  return {
    type: "REMOVE_RESULT",
    payload: index,
  };
};
