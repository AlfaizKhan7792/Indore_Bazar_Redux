import React from 'react'
import Navbar from './components/Navbar'
import { HashRouter as Router , Routes , Route } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPag from './pages/RegisterPag'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import ProductPage from './pages/ProductPage'
import CardButton from './components/CardButton'
import CardPage from './pages/CardPage'

const App = () => {
  return (
    <Router>
<Navbar />
<Routes>
  <Route path='*' element={<PageNotFound />} />
  <Route path='/login' element={<LoginPage />} />
  <Route path='/register' element={<RegisterPag />} />
  <Route path='/' element={<PrivateRoute />}>
  <Route path='/' element={<Home />} />
  <Route path='/product/:id' element={<ProductPage />} />
  <Route path='/card' element={<CardPage />} />
<CardButton />
  </Route>
</Routes>
<Footer />
    </Router>
  )
}

export default App

