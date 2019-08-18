import React from 'react'
import logo from '../logo.svg'

const Cat = (props) =>{
	const mouse = props.mouse
	return (
			<img className="App-logo" src={logo} width="50px" height="50px" alt="logo" 
			style={{position:'absolute', left: mouse.x, top: mouse.y}}/>
		)
}

export default Cat