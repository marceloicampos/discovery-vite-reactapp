import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/'
// acima temos que usar as {} para importar um componente que NÃO é default
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
)
