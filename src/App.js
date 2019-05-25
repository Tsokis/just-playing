import React, { Component } from 'react';
import './App.css';
import Test from './components/test';
import Sidebar from './components/sidebar';
import Animations from './components/animations';
import Contact from './components/Contact';

class App extends Component {
  
  render() {
    const style = {
      listStyleType: 'none'    
    }
     
    return (
      <div className="App">
      <p>Coming from root app</p>
      <Test name="Nik" age="29" test="testing props"/>
      <div>
          <ul className="Test" style={style} > 
            <li>listItem1</li>
            <li>listItem2</li>
            <strong><Sidebar /></strong>            
            <Animations />            
            <canvas className="canvas"></canvas>
          </ul>        
          <Contact />         
       </div>         
      </div>
    );
  }
}

export default App;
