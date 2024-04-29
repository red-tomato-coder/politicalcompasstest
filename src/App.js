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
    </div>
  );
}

export default App;