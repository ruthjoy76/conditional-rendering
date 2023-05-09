import './App.css'
import { useState } from 'react';
import TrafficLight from './components/TrafficLight';
import Temperature from './components/Temperature';
import Login from './components/Login';



function App() {

  const [color, setColor] = useState('red');

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <h1>Today's temperature:</h1>
      <Temperature temperature={85} />
    
      <Login isLoggedIn={false} /> 

      <div>
      <TrafficLight color={color} />
      <button onClick={() => handleColorChange('red')}>Red</button>
      <button onClick={() => handleColorChange('yellow')}>Yellow</button>
      <button onClick={() => handleColorChange('green')}>Green</button>
    </div>
    
    </div>
  );
}

export default App;
