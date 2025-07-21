import { useState } from 'react'
import './App.css'
import NavBar from './components/nav-bar/NavBar'
import { Routes,Route } from 'react-router'
import Home from './pages/home/Home'
import AddTask from './pages/addTask/AddTask'
import ViewTask from './pages/ViewTask/ViewTask'
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddTask />} />
        <Route path='/view-task' element={<ViewTask />} />
      </Routes>
    </>
  )
}

export default App
