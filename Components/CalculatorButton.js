import React from 'react';
import './CalculatorButton.css'




const CalculatorButton = (props) =>{
	/*const operatorsHandler = (value) =>{
	switch(value){
		case "+":
			return (`&times;`)
		default:
			return value
	}
}*/
	return (<div>
			<button onClick = {props.onClick} value = {props.value} >
				{props.value}
			</button>
		</div>)
}




export default CalculatorButton