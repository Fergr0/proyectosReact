import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PokemonProviderWrapper } from './context/Pokemon.context.jsx'
import {BrowserRouter} from 'react-router-dom'
import { UserProviderWrapper } from './context/User.context.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <UserProviderWrapper>
        <BrowserRouter>
          <PokemonProviderWrapper>
            <App />
          </PokemonProviderWrapper>
        </BrowserRouter>
      </UserProviderWrapper>
  </StrictMode>,
)
