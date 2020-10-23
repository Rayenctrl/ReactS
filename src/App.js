import React from 'react';
import Profil from './Profil.js'
import './App.css';

class App extends React.Component {
 state= {show:true,time:0};
 

 ToggleButton=()=>{
   this.setState({
    show:!this.state.show
  })
 }

componentDidMount() {
setInterval(()=>{
  this.setState({time:this.state.time +1 })},1000)
}

render() {
const{show,time}=this.state;
  return(
   <> 
  
   <h2>timer</h2> 
   
   <h2>{time}</h2> 
   
    <button onClick={this.ToggleButton}>Toggle</button>
    {show? <Profil />:null } 
    
   </>
  )
}
} 
export default App;