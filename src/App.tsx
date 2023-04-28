import { useState } from 'react'
import { Timavaki } from './Timavaki'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Timavaki />       
    </>
  )
}

export default App
