import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let addValue = ()=>{
    setCount(count+1);
  }
  let removeValue = ()=>{
    setCount(count-1);
  }
  return (
    <>
     <h1>Counter = {count}</h1>
     <button onClick={addValue}>Add Value</button>
     <button onClick={removeValue}>Remove Value</button>
     <p>Value:{count}</p>
    </>
  )
}

export default App
