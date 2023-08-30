import { useState } from 'react';

function Counter() {
	const [counter, setCounter] = useState(0);

	// let counter = 0;
	function changeNumber() {
		// counter = 2;
		// console.log(counter);
		setCounter(counter + 1);
	}
	return (
		<div>
			<h1>{counter}</h1>

			<button onClick={changeNumber}>Change Number</button>
		</div>
	);
}

export default Counter;
