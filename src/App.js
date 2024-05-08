import React, { useState } from 'react';
import './App.css';
import Questions from './Questions';

function App() {
  const [count, setCount] = useState(0);


  // Function to update the count
  const handleSliderChange = (value) => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Questions i={count} onSliderChange={handleSliderChange} />
      <div className='GitHub'><a href='https://github.com/red-tomato-coder/politicalcompasstest'>Посилання на код</a></div>
    </div>
  );
}

export default App;