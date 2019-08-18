
import constants from "../constants.js"

const Reducer = (state, action) =>{
	switch(action.type){
		case constants.ADD:
		 return {
		 	...state,
		 	activeString: state.activeString.concat(action.payload)
		 }
		 case constants.REMOVE:
		 return {
		 	...state,
		 	activeString: state.activeString.splice(0,(state.activeString.length-1))
		 }
		 case constants.CLEAR:
		 return {
		 	activeString: [0],
		 	result: 0
		 }
		 case constants.EQUIAL:
		 return {
		 	...state,
		 	result: state.activeString.concat(action.payload)
		 }

		default:
		 return state
	}
}

export default Reducer
