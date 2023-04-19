import './App.css';
import { useState } from 'react';

function App() {
const [myColor, setMyColor] = useState('yellow')

  return (
    <div className="App">
   <input style={{backgroundColor:myColor}} onChange={(e)=>{setMyColor(e.target.value)}} type='text' placeholder='insert color'/>
    </div>
  );
}

export default App;
