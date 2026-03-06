import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomeiPhone';
import NavBar from './components/NavBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import * as Sentry from '@sentry/react'
import HomeMac from './pages/HomeMac';
import Footer from './components/Footer';
import Products from './pages/Products';
import HomeiPHONE from './pages/HomeiPhone';

const App = () => {
  return (
    <main className='bg-black'>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path='/iPhone' element={<HomeiPHONE />} />
        <Route path='/macBook' element={<HomeMac />} />
        <Route path='/' element={<Products />}/>
      </Routes>
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
