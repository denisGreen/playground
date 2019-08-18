import React, { useState, useEffect } from 'react';
import Carousel from './Components/Carousel';
import Cat from './Components/Cat';
import usePrevNextIndexCalc from './usePrevNextIndexCalc.js'
import axios from 'axios';
import './App.css';

import logo from './logo.svg'
import slide_1 from './img/slide_1.jpg'
import slide_2 from './img/slide_2.jpg'
import slide_3 from './img/slide_3.jpg'

//import Store from './Store.js'
//import Calculator from './Calculator.js'

//import {ThemeContext, themes} from './theme-context';
//import ThemedButton from './Components/themed-button';

// An intermediate component that uses the ThemedButton
/*function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}*/

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton />
        </div>
        <div>
      		<Calculator/>
      
    	</div>
      </div>
    );
  }
}*/

const SPLASHBASE_URL = 'http://www.splashbase.co/api/v1/images/latest';

/*class Mouse extends React.Component{
  constructor(props){
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }
}*/

const Mouse = (props)=>{

  const [mouse, setMouse] = useState({x:0, y:0})
  const handleMouseMove = (event)=>{
    setMouse({x: event.clientX, y: event.clientY})
  }

  return(
      <div style={{height: '100%'}} onMouseMove={handleMouseMove}>
        {props.render(mouse)}
      </div>
    )

}


const App = (props) => {
 //const theme = useContext(themes.light)
 /*const [imgList, setImgList] = useState([]);
 const [scroll, setScroll] = useState({x:0, y:0})*/
 
 /*useEffect(() => {
    axios.get(SPLASHBASE_URL)
    .then((resp) => {
      setImgList(resp.data.images);
    }).catch((err) => {
      console.log('Unable to Fetch Image from splashbase', err);
    });
  }, []);*/
  
  
  /*useEffect(()=>{
    setScroll({x: window.scrollX, y: window.scrollY})
  })
  useEffect(()=>{
    setImgList([{id:1, url: slide_1}, {id:2, url: slide_2}, {id:3, url: slide_3}])
      }

  )


  const size = {img_width: 300, img_height:300}
  const imgUpList = imgList.map((item)=>{
      return (<div key= {item.id} className="item">
        <img  src={item.url} width={size.img_width} height={size.img_height}alt=""/>
      </div>)
    })*/
  
  return (
    < div style={{height:'300px'}}>
      <p>Move the mouse</p>
      <Mouse render= {mouse =>(
        <Cat mouse={mouse}/>
        )
      }/>
      
    </div>
  )
}

export default App;
{/*<menu className="menu">
        <button type="button" className="menu-item">menu_item
        </button>
        <button type="button" className="menu-item">menu_item
        </button>
        <button type="button" className="menu-item">menu_item
        </button>
      </menu>
      <div className="container">
        
          {imgUpList}
          
        
        
      </div>
      <aside>
        <ul className="menu">
          <li className="menu-item">
              menu_item
          </li>
          <li className="menu-item">
              menu_item
          </li>
          <li className="menu-item">  
            menu_item
          </li>
          <li className="menu-item">
            menu_item
          </li>
        </ul>
      </aside>
      <div className="scroll">
        <p>Scroll x:{scroll.x}</p>
        <p>Scroll y:{scroll.y}</p>

        <p>Mouse x:{mouse.x}</p>
        <p>Mouse y:{mouse.y}</p>
      </div>
      
      <h1 id="carousel">Carousel</h1>
      {imgList.length === 0 && <div>Loading...</div>}
      {imgList.length > 0 &&
        <Carousel imgList={imgList} img_width={300} img_height={300}
        visibleImages={3} duration={750}/>
      }

      <article id="article">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quo praesentium quos omnis enim excepturi at numquam architecto pariatur. 
        Sed, amet, quas. Officia possimus repellendus natus fuga error, aliquid culpa, laborum?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Ea temporibus omnis, deleniti sint sequi officia deserunt dolorum rerum. 
           Quibusdam, dicta fugiat molestiae ab eligendi quam expedita exercitationem alias recusandae nam!
        </p>
      </article>*/}