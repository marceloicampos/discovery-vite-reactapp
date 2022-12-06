import './styles.css'
import { Card } from '../../components/Card'

export function Home() {
    return (
        <div className="container">
            <h1>Lista de Presença</h1>
            <input type="text" placeholder="Digite seu Nome ..." />
            <button type="button">Adicionar</button>
            <Card name="Celo" time="10:55:25" age={43} />
            <Card name="Caio" time="11:55:25" age={17}/>
            <Card name="Duda" time="12:55:25" age={12}/>
        </div>
    )
}

// export default Home
