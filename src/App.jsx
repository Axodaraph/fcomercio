import { useState } from 'react'
import { ProductSection } from './ProductSection'
import './App.css'

const productos = [
  {
    
  }
]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductSection/>
      <ProductSection/>
    </>
  )
}

export default App
