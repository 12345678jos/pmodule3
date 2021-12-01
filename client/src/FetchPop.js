import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom'


function FetchPop() {

    let [pop, setPop] = useState ([])

    useEffect(() => {
        fetch('http://localhost:9000/musica/pop')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setPop(res)})
    },[])

    return (
        <>
            {pop !== []?
            pop.map(po=>{
              return(
                <div className="po">
                    <p>Artista: {po.artista}</p>
                    <p>Origen:{po.origen}</p>
                    <p>Genero: {po.genero}</p>
                    <img src={po.imagen }alt=""/>
                </div>
              )
            })
            :<p>La URL seleccionada no existe</p>}
        </>
    )
}

export default FetchPop;
