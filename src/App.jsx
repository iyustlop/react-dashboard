import { useState } from 'react'
import './App.css'
import Sidebar from '@components/Sidebar/Sidebar'
import MainDash from '@components/MainDash/MainDash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <MainDash />
        </div>
      </div>
    </>
  )
}

export default App
