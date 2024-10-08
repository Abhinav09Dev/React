import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card price="300" />
      <Card price="100"/>
    </>
  )
}

export default App
