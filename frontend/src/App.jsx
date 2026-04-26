import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './pages/Navbar'
import CreatePost from './pages/CreatePost'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/createPost' element={<CreatePost/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  )
}

export default App
