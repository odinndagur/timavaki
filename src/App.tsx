import { useState } from 'react'
import { Timavaki } from './Timavaki'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Timavaki radius={200}/>
      <input type="text" />  
    </div>
  )
}

export default App
