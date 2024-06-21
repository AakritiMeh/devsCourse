import { useState } from 'react'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(count);
  // console.log(setCount)

  function onClickHandler(){
    setCount(count+1)
    // console.log(count)
  }

  return (
    <div>
      <button onClick={onClickHandler}> Counter {count}</button>
    </div>
  )
}

export default App
