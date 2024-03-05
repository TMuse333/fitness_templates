import { useState } from 'react'

import './App.css'
import Homepage from './components/homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/'
        element={<Homepage/>}
        />
    </Routes>
     <Homepage/>
    </>
  )
}

export default App
