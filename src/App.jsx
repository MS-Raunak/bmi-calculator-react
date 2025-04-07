import { useState } from 'react'
import './App.css'
import BmiCalc from './component/BmiCalc'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <BmiCalc/>
  </>
  )
}

export default App
