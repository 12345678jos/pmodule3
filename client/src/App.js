import logo from './logo.svg';
import './App.css';
import {  useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, useParams,  Link } from 'react-router-dom'

import Cabecera from './Cabecera';
import FetchHeavy from './FetchHeavy'
import FetchPop from './FetchPop'
import FetchRB from './FetchRB';
// import FetchMiClientes from './FetchClientes';
// import FetchMiVentas from './FetchVentas';

function App() {

  return (
    <>
      <Router>
        <Cabecera />
        <Routes>
          {/* <Route path="/clientes" element={<FetchMiClientes />}/>
          <Route path="/ventas" element={<FetchMiVentas />}/> */}
          <Route path="/musica" element={<Outlet/>}>
            <Route path="Pop" element={<FetchPop/>}></Route>
            <Route path="Heavy" element={<FetchHeavy />}></Route>
            <Route path="RB" element={<FetchRB  />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;