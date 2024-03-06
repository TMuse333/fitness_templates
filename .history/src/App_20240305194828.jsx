import { useState } from 'react'

import './App.css'
import Homepage from './pages/homepage'
import Program from './pages/program';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/'
        element={<Homepage/>}
        />
        <Route path='programs'
        element={<Program/>}
        />
        <Route path='contact'
        element={}
    </Routes>
     
    </>
  )
}

export default App
