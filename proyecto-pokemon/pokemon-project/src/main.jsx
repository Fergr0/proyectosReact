import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PokemonProviderWrapper } from './context/Pokemon.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokemonProviderWrapper>
      <App />
    </PokemonProviderWrapper>
  </StrictMode>,
)