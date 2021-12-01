import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom'
function Cabecera() {
    return (
        <>
            <li><Link to="">Home</Link></li>
            {/* <li><Link to="/ventas">Ventas</Link></li>
            <li><Link to="/clientes">Clientes</Link></li> */}
            <li><Link to="/musica/pop">Pop</Link></li>
            <li><Link to="/musica/rb">RB</Link></li>
            <li><Link to="/musica/heavy">Heavy</Link></li>
        </>

    )
}

export default Cabecera;