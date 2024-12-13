

function login(props) {
    const user = {
        username: "Fer",
        mail: "fergr01bbx@gmail.com"
    }

    const handleClick = () => {
      props.handleLogin(user)
    }

  return (
    <section>
        <h2>Sección Login</h2>
        <button onClick={handleClick}>Login</button>
    </section>
  )
}

export default login