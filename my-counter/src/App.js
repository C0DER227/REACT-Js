import { useState } from 'react'
import './App.css';

function App() {

  const [counter, SetCounter] = useState(0)

  const increement = () => {
    SetCounter(counter + 1)
  }

  const decreement = () => {
    SetCounter(counter - 1)
  }

  const setZero = () => {
    SetCounter(0)
  }

  return (
    <>
    <h1>My Counter</h1>
      <button  className="btn" onClick={increement}>Increement</button>
      <button  className="btn" onClick={decreement}>Decreement</button>
      <button  className="btn" onClick={setZero}>Set Zero</button>
      <h2>{counter}</h2>
    </>

  );
}

export default App;
