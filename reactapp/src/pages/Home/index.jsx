import React, { useState } from 'react'
// o useState o padrão para criar um estado no react e retorna um array com 2 posições
import './styles.css'
import { Card } from '../../components/Card'

export function Home() {
    const [studentName, setStudentName] = useState('')
    // o primeiro é onde GUARDAMOS o valor do estado e o segundo é a FUNÇÃO que atualiza o estado [estado, setEstado]
    // lembrando que o useState pode iniciar vazio ''

    return (
        <div className="container">
            <h1>Lista de Presença</h1>
            <h2>Nome: {studentName}</h2>
            <input type="text" placeholder="Digite um Nome ..." onChange={e => setStudentName(e.target.value)} />
            <button type="button">Adicionar</button>
            <Card name="Celo" time="10:55:25" age={43} />
            <Card name="Caio" time="11:55:25" age={17} />
            <Card name="Duda" time="12:55:25" age={12} />
        </div>
    )
    // no input acima pegamos o target.value do element 'e' pelo onChange
    // então atualizamos o valor do estado pelo setStudentName
}

// export default Home
