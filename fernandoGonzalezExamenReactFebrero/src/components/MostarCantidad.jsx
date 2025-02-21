import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import productoService from "../services/producto.service";
import "../Styles/styles.css"

function MostarCantidad() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [resultado, setResultado] = useState()
    const [error, setError] = useState(false)
    const [porcentaje, setPorcentaje] = useState()
    const [producto, setProducto] = useState({
        id: "",
        stock: "",
        name: "",
        brand: 0,
        price: 0.0,
        active: true,
    });
    const [moneda1, setMoneda1] = useState({
        id: "",
        stock: "",
        name: "",
        brand: 0,
        price: 0.0,
        active: true,
    })

    useEffect(() => {
        cargarProducto();
        descargaEuro()
    }, [], [moneda1], [resultado], [error],[porcentaje], [producto]);

    const cargarProducto = async () => {
        try {
            const response = await productoService.getAll();
            const productoEncontrado = response.data.find(p => p.id === id);
            if (productoEncontrado) {
                setProducto(productoEncontrado);
                setPorcentaje(productoEncontrado.stock)
            } else {
                console.error("Producto no encontrado");
                navigate("/listado");
            }
        } catch (error) {
            console.error("Error al cargar el producto:", error);
        }
    };

    const descargaEuro = async () => {
        try {
            const response = await productoService.getAll();
            const productoEncontrado = response.data.find(p => p.id === "moneda1");
            setMoneda1(productoEncontrado);
        } catch (error) {
            console.log("Error al descargar los euros")
        }
    }

    const handleIncrementa = async (e) => {
        e.preventDefault()
        const producto2 = producto
        producto2.stock += 10
        productoService.update(producto.id, producto2)
        cargarProducto()
    }


    const setConvierte = (e) => {
        const aConvertir = e
        if (aConvertir > producto.stock) {
            setError(true)
        } else {
            setError(false)
            setResultado(aConvertir * producto.price)
        }

    }

    return (
        <div className="container mt-4">
            {producto.active ?  (<div>            <div className="container mt-3">
                <h5>Capacidad del Inventario</h5>
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${porcentaje}%` }}
                        aria-valuenow={porcentaje}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        {/* {porcentaje.toFixed(1)}% */}
                    </div>
                </div>
            </div>
                {/* HASTA AQUI LA BARRA DE PROGRESO */}

            {error ? (
                <form className="card p-4">
                    <div className="mb-3">

                        <label className="form-label">Cantidad</label>
                        <input
                            type="number"
                            className="form-control"
                            min="1"
                            max={producto.stock}
                            onChange={(e) => setConvierte(Number(e.target.value))}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Equivalencia</label>
                        <input type="text" name="name" className="form-control" value={"te has pasado de stock"} />
                    </div>
                </form>
            ) : (
                <form className="card p-4">
                    <div className="mb-3">

                        <label className="form-label">Cantidad</label>
                        <input
                            type="number"
                            className="form-control"
                            min="1"
                            max={producto.stock}
                            onChange={(e) => setConvierte(Number(e.target.value))}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Equivalencia</label>
                        <input type="text" name="name" className="form-control" value={resultado} />
                    </div>
                    {producto.stock < 100 ? (<div>
                        <div className="mb-3">
                            <label className="form-label">Cantidad</label>
                            <p>Reseva no llena</p>
                        </div>
                        <button
                            className="btn btn-success"
                            onClick={handleIncrementa}
                        >
                            Incrementar
                        </button>
                    </div>) : (<div>
                        <div className="mb-3">
                            <label className="form-label">Cantidad</label>
                            <p id='errorcito'>Reserva llena</p>
                        </div>
                        <button
                            className="btn btn-danger"
                            disabled
                        >
                            Incrementar
                        </button>
                    </div>)}

                </form>)}</div>):
                (<div>
                    <div className="container mt-3">
                <h5>Capacidad del Inventario</h5>
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${porcentaje}%` }}
                        aria-valuenow={porcentaje}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        {/* {porcentaje.toFixed(1)}% */}
                    </div>
                </div>
            </div>
                {/* HASTA AQUI LA BARRA DE PROGRESO */}

            {error ? (
                <form className="card p-4">
                    <div className="mb-3">

                        <label className="form-label">Cantidad</label>
                        <input
                        disabled
                            type="number"
                            className="form-control"
                            min="1"
                            max={producto.stock}
                            onChange={(e) => setConvierte(Number(e.target.value))}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Equivalencia</label>
                        <input type="text" name="name" className="form-control" value={"te has pasado de stock"} disabled/>
                    </div>
                </form>
            ) : (
                <form className="card p-4">
                    <div className="mb-3">

                        <label className="form-label">Cantidad</label>
                        <input
                            disabled
                            type="number"
                            className="form-control"
                            min="1"
                            max={producto.stock}
                            onChange={(e) => setConvierte(Number(e.target.value))}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Equivalencia</label>
                        <input disabled type="text" name="name" className="form-control" value={resultado} />
                    </div>
                    {producto.stock < 100 ? (<div>
                        <div className="mb-3">
                            <label className="form-label">Cantidad</label>
                            <p>Reseva no llena</p>
                        </div>
                        <button
                            disabled
                            className="btn btn-success"
                            onClick={handleIncrementa}
                        >
                            Incrementar
                        </button>
                    </div>) : (<div>
                        <div className="mb-3">
                            <label className="form-label">Cantidad</label>
                            <p id='errorcito'>Reserva llena</p>
                        </div>
                        <button
                            className="btn btn-danger"
                            disabled
                        >
                            Incrementar
                        </button>
                    </div>)}

                </form>)}
                </div>)}
            
        </div>
    );
}

export default MostarCantidad