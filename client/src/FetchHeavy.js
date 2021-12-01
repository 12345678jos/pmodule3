import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom'


function FetchHeavy() {

    let [heavy, setHeavy] = useState([])

    useEffect(() => {
        fetch('http://localhost:9000/musica/Heavy')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setHeavy(res)})
    },[])


    return (
        <>
            {heavy !== undefined?
            heavy.map(hev=>{
              return(
                <div className="hev">
                    <p>Artista: {hev.artista}</p>
                    <p>Origen:{hev.origen}</p>
                    <p>Genero: {hev.genero}</p>
                    <img src={hev.imagen}alt=""/></div>
              )
            })
            :<p>La URL seleccionada no existe</p>}
        </>
    )
}

export default FetchHeavy;
