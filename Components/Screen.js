import React, {useContext} from 'react';
import Context from '../Reducers/reducers.js'




export default function Screen(props){
	/*let displayString = props.screenString.replace(/(\*)|(\/)|(\+)|(-)/g, function(match, p1, p2, p3, p4){
        switch(match){
            case p1: return "&times;";
            case p2: return "&divide;";
            case p3: return "&plus;";
            case p4: return "&minus;";
                    }
        });*/
	//const [state, dispatch] = useContext(Context)
	return(
		<div>
			{props.screenString}
		</div>
		)
}
