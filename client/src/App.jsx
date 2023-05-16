import { useState } from 'react'
import Customizer from './pages/customizer'
import Canvas from './canvas'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='app transition-all ease-in'> 
      <Home />
      <Canvas />
      <Customizer />
    </main>
    </>
  )
}

export default App
