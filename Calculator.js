import React, {useState} from 'react'
import CalculatorButton from './Components/CalculatorButton.js'
import Screen from './Components/Screen.js'
//import {buttonsArray} from './buttonsArray.js'


const buttonsArray = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "/", "*"
]
console.log(buttonsArray)



const Calculator = () =>{
	const [screenArr, setScreenArr] = useState([0])
	const [result, setResult] = useState(0)
	console.log()
	let screenString = screenArr.join("")

	const handleClear = () => setScreenArr([0])

	const handleRemove = () => setScreenArr(screenArr.splice(0,(screenArr.length - 1)))

	const handleEQUAL = ()=> setScreenArr([eval(screenString)])

	const handleClick = (e)=>{
		//e.preventDefault()
		setScreenArr(screenArr.concat(e.target.value))
		console.log(e.target.value)
	}
	const buttons = buttonsArray.map((item) =>{
		return(
				<CalculatorButton
				 	key={buttonsArray.indexOf(item)}
					value={item}
					onClick={handleClick}
					/>
			)
	})

	return(
		<div>
			<Screen screenString={screenString}/>
			{buttons}
			<CalculatorButton
				value="="
				onClick={handleEQUAL}
			/>
			<CalculatorButton
				value="C"
				onClick={handleRemove}
			/>
			<CalculatorButton
				value="AC"
				onClick={handleClear}
			/>
		</div>
		)
} 

export default Calculator