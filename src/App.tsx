import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register'

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App