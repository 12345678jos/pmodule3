import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom'

function FetchRB() {

    let [RB, setRB] = useState([])

    useEffect(() => {
        fetch('http://localhost:9000/musica/RB')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setRB(res)})
            },[])

    return (
        <>
            {RB !== undefined?
            RB.map(rb=>{
              return(
                <div className="RB">
                    <p>Artista: {rb.artista}</p>
                    <p>Origen:{rb.origen}</p>
                    <p>Genero: {rb.genero}</p>
                    <img src={rb.imagen}alt=""/>

                    </div>
              )
            })
            :<p>La URL seleccionada no existe</p>}
        </>
    )
}

export default FetchRB;
