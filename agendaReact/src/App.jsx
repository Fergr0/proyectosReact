import { PureComponent, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingUpComponent from './components/SingUpComponent';
import LoginComponent from './components/LoginComponent';
import PruebaComponent from './components/PruebaComponent';
import UserProvider from '../src/providers/UserProvider';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <UserProvider>
      <Routes>
      
          <Route path="/" element={<SingUpComponent />} />
          <Route path="/singUp" element={<SingUpComponent />} />
          <Route path="/logIn" element={<LoginComponent />} />
          <Route path="/prueba" element={<PruebaComponent />} />
      </Routes>
      </UserProvider>

  )
}

export default App
