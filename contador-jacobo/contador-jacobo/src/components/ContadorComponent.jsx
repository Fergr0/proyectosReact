import '../styles/estilos.css'

function ContadorComponent(props) {
  return (
    <div className="container-counter">
        <div className="counter">
            <h1>{props.num}</h1>
        </div>
        <div className="buttons">
            <button className={props.clase} onClick={props.incrementar}>Incrementar</button>
            <button onClick={props.decrementar}>Decrementar</button>
            <button onClick={props.resetear}>Resetear</button>
        </div>
    </div>
  )
}

export default ContadorComponent