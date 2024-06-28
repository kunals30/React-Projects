import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const sub = ()=>{
    if(count > 0){
      setCount(count-1);
    }
  }

  return (
    <>
      <button onClick={()=>{
        setCount(count+1);
        console.log(count)
      }}>+</button>
      <p>{count}</p>
      <button onClick={sub}>-</button>
    </>
  )
}

export default App
