import { useState } from 'react'
import './App.css'
import Sidebar from '@components/Sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default App
