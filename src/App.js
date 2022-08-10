import React from 'react'
import Menu from './pages/Menu'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element= {<Navigate to= '/Welcome' /> } />
      <Route path= '/Menu' element= {<Menu/>} />
      {/* <Route path= '*' element={<NotFound/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
