import { useEffect, useState } from 'react'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("count is :", count);

  }, [count])

  return (
    <>
      <div className="tutorial">
        <h1>Count: {count}</h1>
        <button onClick={() => { if (count > 0) setCount(count - 1) }}>
          Decrement
        </button>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button >
      </div >
    </>
  )
}

export default App
