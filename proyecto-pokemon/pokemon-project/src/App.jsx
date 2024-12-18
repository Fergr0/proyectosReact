import './App.css'
import {Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import PokemonPage from './pages/PokemonPage'
import PokemPage from './pages/PokemPage'
import ErrorPage from './pages/ErrorPage'


function App() {
  return(
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/pokemons' element={<PokemonPage />}/>
      <Route path='/pokemon/:id' element={<PokemPage />}/>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
  )
}

export default App
