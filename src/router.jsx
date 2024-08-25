import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './pages/app';
import Contato from './pages/contato';
import NotFound from './pages/notfound';
import Eventos from './pages/eventos';
import VarEstado from './pages/varEstado';
import Comps from './pages/comps';



export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Contato' element={<Contato />} />
                <Route path='/Eventos' element={<Eventos />} />
                <Route path='/varestado' element={<VarEstado/>} />
                <Route path='/componentes' element={<Comps/>} />

                <Route path='*' element= {<NotFound/>} />
            </Routes>
        </BrowserRouter>


    )
}