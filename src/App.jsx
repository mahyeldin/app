import React from 'react'
import Login from './components/login/login'
import Register from './components/register/register'
import Home from './pages/home/home'
import Hoteldetils from './pages/hoteldetils/hoteldetils'
import Landingpage from './pages/landingpage/landingpage'
import EditPro from './pages/cherif/EditPro'
import ProfileForm from './components/cherif/ProfileForm'
import Favorites from './pages/cherif/Favorites'
import Listings from './pages/cherif/Listings'

import Addhouse from './pages/taher/addhouse'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/hotel/:id' element={<Hoteldetils/>}/>
        <Route path='/' element={<Landingpage/>} />
        <Route path="/edit-property"  element={<EditPro />}>
          <Route index element={<ProfileForm />} />
          <Route path="listings" element={<Listings/>} />
          <Route path="favorite" element={<Favorites />} />
        </Route>
        <Route path='/addhouse' element={<Addhouse/>}/>
      </Routes>

  )
}

export default App