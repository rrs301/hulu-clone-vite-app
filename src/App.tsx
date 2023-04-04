import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Screen/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen'>
        <Home/>
    </div>
  )
}

export default App
