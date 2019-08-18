import React, {useContext} from 'react'
import {ThemeContext} from '../theme-context';

/*class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}*/
//ThemedButton.contextType = ThemeContext;


const ThemedButton = (props)=>{

   
    const theme = useContext(ThemeContext);
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background, color:theme.foreground}}
      />
    );
  }


export default ThemedButton;