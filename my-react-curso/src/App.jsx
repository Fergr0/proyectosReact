import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ButtonComponent from './components/ButtonComponent'
import LoginComponent from './components/LoginComponent'

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
  const [user, setUser] = useState({
  })

  const login = (userInfo) => {
    console.log(userInfo)
    setUser(userInfo)
  }

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
        <h2 onClick={sayHello}>Hola {user.username}</h2>
        <LoginComponent ></LoginComponent>
        <h2 onClick={upOne}>Número: {number}</h2>
        <input value={myValue} type="text" onChange={handleChange} placeholder={myPlaceHolder} />
        <br></br>
        <br></br>
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  )
}

export default App
