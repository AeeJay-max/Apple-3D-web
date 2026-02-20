import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import * as Sentry from '@sentry/react'

const App = () => {
  return (
    <main className='bg-black'>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  )
}

export default Sentry.withProfiler(App);
