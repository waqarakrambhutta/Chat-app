import React from 'react'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import Sidebar from './components/Sidebar'
import Chatarea from './components/Chatarea'

const App = () => {
  return (
   <>
   <Sidebar/>
   <Chatarea/>

   {/* <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
   </BrowserRouter> */}
   </>
  )
}

export default App