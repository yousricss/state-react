import React, { Component } from 'react'
import Profile from './profile/Profile';
import "./App.css";
import Counter from './profile/Counter';

export class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      isShow: false,

      profiles:[
        {
          name:"Brad Pitt",
          imageUrl:"https://static1.purepeople.com/articles/9/36/64/49/@/5284163-brad-pitt-les-celebrites-assistent-a-l-624x600-1.jpg",
          profession:"Actor"
        }
      ]
    };
  }
  toggleVisibility =() =>{
    this.setState({
      isShow : ! this.state.isShow
    }
    )

  }
  
  render() {
    return (
      <div>
        <button style={{marginLeft:"465px", marginTop:"10px"}}
         className="visibility-btn" onClick={this.toggleVisibility}>{this.state.isShow ? 'Hide profile': 'Show profile'}</button>
        
        {this.state.isShow ?
                <Profile 
                name={this.state.profiles[0].name} 
                imageUrl={this.state.profiles[0].imageUrl} 
                profession={this.state.profiles[0].profession}/> 
                
                :  <Counter/> 
               // (<h4 style={{textAlign:"center"}}>click on the button to show profile </h4>)
      }
                


      </div>
    )
  }
}

export default App
