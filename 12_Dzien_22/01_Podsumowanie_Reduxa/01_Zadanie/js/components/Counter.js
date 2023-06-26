import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startCounterAsync,
  stopCounterAsync,
  addResult
} from '../redux/actions';

function Counter() {
  const dispatch = useDispatch();
  const { isCounting, value, intervalId } = useSelector(
    state => state.counter
  );
  const { results } = useSelector(state => state.results);

  const handleStart = () => {
    dispatch(startCounterAsync());
  };

  const handleStop = () => {
    dispatch(stopCounterAsync(intervalId));
  };

  const handleAddResult = () => {
    dispatch(addResult(value));
  };

  return (
    <div>
      <div>
        <div>
          <button onClick={handleStart} disabled={isCounting}>
            Start
          </button>
          <button onClick={handleStop} disabled={!isCounting}>
            Stop
          </button>
          <h1>{value}</h1>
        </div>
        <div>
          <button onClick={handleAddResult}>Zapisz</button>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Counter;
