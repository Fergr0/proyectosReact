import logo from "../assets/logo.png"
import "./HomePage.css"
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <section id="home-page">
     <h1 className="title">Bienveido</h1>
     <img src={logo} alt="pokemon-logo" className="logo"/>
     <Link to='/pokemons' className="link">Entrar</Link>       
    </section>
  )
}

export default HomePage