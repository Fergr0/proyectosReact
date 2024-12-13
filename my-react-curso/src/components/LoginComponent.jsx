

function login(props) {
    const user = {
        username: "",
        mail: ""
    }

    const setUsername = (e) =>{
      user.username = e.target.value
    }

    const setEmail = (e) =>{
      user.mail = e.target.value
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(user)
      props.handleLogin(user)
    }

  return (
    <section>
        <h2>Sección Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={setUsername}/><br/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={setEmail}></input>
          <button>Login</button>
        </form>
    </section>
  )
}

export default login