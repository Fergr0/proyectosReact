import { useEffect, useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import MemeListComponent from './components/MemeListComponent'


function App() {


  const [greetings, setGreetings] = useState("Bienvenidos a mi web")
  const links = {
    home: "Casa",
    blog: "Blog",
    news: "Noticias",
    contact: "Contáctanos"
  }



  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>
      <main className='main-content'>
        <MemeListComponent></MemeListComponent>
      </main>

    </>
  )
}

export default App
