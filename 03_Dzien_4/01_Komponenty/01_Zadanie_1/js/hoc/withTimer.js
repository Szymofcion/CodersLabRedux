/**
 * Napisz HOC implementujący licznik
 *
 * Nie zapomnij wyeksportować!
 * export default withTimer;
 */

import { useState } from 'react'

const withTimer = WrappedComponent => {
	return (props) => {
		const [counter, setCounter] = useState(0)
		const [intervalId, setIntervalId] = useState(null)
		const startTimer = () => {
			setInterval(() => {
				setCounter(prev => prev + 1)
			}, 1000)
            setIntervalId(id)
		}
		const stopTimer = () => {
			clearInterval(intervalId)
		}

		return <WrappedComponent startTimer={startTimer} counter={counter} stopTimer={stopTimer} props={...props} />
	}
}
export default withTimer
