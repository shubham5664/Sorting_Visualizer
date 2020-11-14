import logo from './logo.svg';
import './App.css';
import Visualizer from './Component/Visualizer.jsx'
import Mobile_visualizer from './Component/Mobile_visualizer.jsx'
import { render } from '@testing-library/react';

function App() {
  function isMobile()
  {
    return ( ( window.innerWidth <= 1000 ) && ( window.innerHeight <= 800 ) );
  }
    
    return (
      <div className="App">
        
        {isMobile()?(<Mobile_visualizer/>):(<Visualizer/>)}
      </div>
    );
    console.log("log"+isMobile());
  
   
}


export default App;
