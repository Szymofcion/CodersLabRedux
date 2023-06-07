import React from 'react'
import withTimer from '../hoc/withTimer'
// Zamień ciało funkcji tak aby renderowała Stopper wg. treści zadania
const Stopper = ({startTimer,counter,stopTimer}) => {
	return (
		<div>
			<button onClick={startTimer}>start</button>
			<button onClick={stopTimer}>stop</button>
			<h1>{counter}</h1>
		</div>
	)
}

// Zamień deklarację komponentu poniżej tak aby korzystał z wczesniej zamiplementowanego HOC withTimer
const StopperWithTimer = withTimer(Stopper)

export { Stopper, StopperWithTimer }
