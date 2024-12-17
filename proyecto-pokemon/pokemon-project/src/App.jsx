import './App.css'
import {Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import PokemonPage from './pages/PokemonPage'


function App() {
  return(
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/pokemons' element={<PokemonPage />}/>
    </Routes>
  )
}

export default App
