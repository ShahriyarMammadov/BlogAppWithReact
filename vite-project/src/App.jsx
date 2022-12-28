import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from '../src/assets/pages/homePage'
import BlogPage from './assets/pages/blogPage'
import HeaderComp from './assets/layout/header'
import ModalComp from './assets/pages/modalPage'
import ErrorPage from './assets/pages/errorPages'

function App() {

  return (
    <div className="App">
      <HeaderComp />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/blog' element={<BlogPage />}></Route>
        <Route path='/details/:id' element={<ModalComp />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
