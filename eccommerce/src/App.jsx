import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authlayout from './layouts/Authlayout'
import Checkout from './pages/Checkout'
import Profile from './pages/Profile'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Guestlayout from './layouts/Guestlayout'

const AppContext = createContext();
export function useAppContext(){
  return useContext(AppContext)
}
const API_URL = import.meta.env.VITE_API_URL

function App() {
  const[cart, setCart] = useState([])
  return (
  <>
  <AppContext.Provider value={{cart, setCart,API_URL}}>
  <BrowserRouter>
  {/* AUTH */}
  <Routes>
<Route path='/checkout' element={<Authlayout><Checkout/></Authlayout>}/>
<Route path='/profile' element={<Authlayout><Profile/></Authlayout>}/>
  </Routes>

  {/* GUEST */}
  <Routes>
  <Route path='' element={<Guestlayout><Home/></Guestlayout>}/>
  <Route path='/about' element={<Guestlayout><About/></Guestlayout>}/>
  <Route path='/cart' element={<Guestlayout><Cart/></Guestlayout>}/>
  <Route path='/login' element={<Guestlayout><Login/></Guestlayout>}/>
  <Route path='/signup' element={<Guestlayout><Signup/></Guestlayout>}/>
  </Routes>
  </BrowserRouter>
  </AppContext.Provider>
  </>
  )
}

export default App