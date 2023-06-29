// Counter

import React, { useEffect} from 'react';

import { useHistory, useNavigate } from "react-router-dom";

const Counter = (props) => {

    const { counter, initialValue, onStartCounting, onPause, onSet } = props;

    useEffect(() => {
        if (initialValue) {
            onSet(Number(initialValue));
        }
    }, []);

    useEffect(() => {
        if (counter.value === 5) {
            onPause();
        }
    }, [counter.value]);

    return (
        <div>
            <button disabled={counter.isCounting} onClick={() => onStartCounting()}>Start</button>
            <button disabled={!counter.isCounting} onClick={() => onPause()}>Stop</button>
            <h1>{ counter.value }</h1>
        </div>
    )

}

export default Counter;
