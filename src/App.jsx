import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Products from './pages/Products'
import HomeiPHONE from './pages/HomeiPhone'
import HomeMac from './pages/HomeMac'
import IPad from './pages/iPadHome'
import Support from './pages/Support'
import Developer from './pages/Developer'
import { ToastContainer } from 'react-toastify'
import * as Sentry from '@sentry/react'

const App = () => {
  return (
    <main className="bg-black">
      <ToastContainer />
      <NavBar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/iphone" element={<HomeiPHONE />} />
        <Route path="/macbook" element={<HomeMac />} />
        <Route path="/ipad" element={<IPad />} />
        <Route path="/support" element={<Support />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>

      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App)
