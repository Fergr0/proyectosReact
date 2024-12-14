import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ButtonComponent from './components/ButtonComponent'
import LoginComponent from './components/LoginComponent'
import MovieListComponent from './components/MovieListComponent'
import AnimalListComponent from './components/AnimalListComponent'

function App() {


  // let number = 0;
  const [number, setNumber] = useState(0)
  const [myValue, setMyValue] = useState("")
  let myPlaceHolder = "Escribe aquí"
  const [greetings, setGreetings] = useState("Bienvenidos a mi web")
  const links = {
    home: "Casa",
    blog: "Blog",
    news: "Noticias",
    contact: "Contáctanos"
  }

  const condition = true;

  const [user, setUser] = useState({
  })

  // useEffect(()=>{
  //   console.log("Ejecución cada vez que se renderiza el componente raiz")
  // })

  // useEffect(()=>{
  //   console.log("Ejecución con cada cambio de la variable reactiva user")
  // }, [user])





  const login = (userInfo) => {
    console.log(userInfo)
    setUser(userInfo)
  }

  const [showMovies, setShowMovies] = useState(true)

  const upOne = () =>{
    // number++;
    setNumber(number + 1)
    console.log(number)
  }

  const sayHello =() => {
    console.log("Hola")
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>
      <main className='main-content'>
        {
          user.username && <h2 onClick={sayHello}>Hola {user.username}</h2>
        }
        <LoginComponent handleLogin={login}></LoginComponent>

        {/* <button onClick={()=>{setShowMovies(!showMovies)}}>Mostrar películas</button>

        {
          condition && <h2>La condición se cumple</h2>
        }
        {
          !condition && <h2>La condición no se cumple</h2>
        }
        {
          condition ? (<h2>Se cumple con ternario</h2>):
          (<h2>No se cumple con ternario</h2>)
        }

        {
          showMovies && 
          <MovieListComponent></MovieListComponent>}
        <AnimalListComponent></AnimalListComponent> */}
      </main>
    </>
  )
}

export default App
