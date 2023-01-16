import React, { useState, useEffect } from 'react'
// o useState o padrão para criar um estado no react e retorna um array com 2 posições
import './styles.css'
// import reactLogo from '../../assets/react.svg'
// <img src={reactLogo} className="logo react" alt="React logo" />
import { Card, CardProps } from '../../components/Card'

type ProfileResponse = {
    name: string
    id: number
    avatar_url: string
}

type User = {
    name: string
    id: number
    avatar: string
}

export function Home() {
    const [studentKey, setStudentKey] = useState(0)
    const [studentId, setStudentId] = useState(1)
    const [studentName, setStudentName] = useState('')
    const [studentMat, setStudentMat] = useState('')
    // o primeiro é onde GUARDAMOS o valor do estado e o segundo é a FUNÇÃO que atualiza o estado [state, setState]
    // lembrando que o useState pode iniciar vazio ''
    const [students, setStudents] = useState<CardProps[]>([])
    const [user, setUser] = useState<User>({} as User)

    function handleAddStudent() {
        const newStudent = {
            key: studentKey,
            id: studentId,
            name: studentName,
            time: new Date().toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }),
            mat: studentMat
        }
        setStudents(prevState => [...prevState, newStudent])
        setStudentKey(studentKey => studentKey + 1)
        console.log(`Chave do React: ${newStudent.key}`)
        setStudentId(studentId => studentId + 1)
        // acima temos um array de estudantes e adicionamos um novo estudante
        // estamos quebrando a regra da imutabilidade do array
        // o ...prevState (pode ser qualquer nome) é o spread operator
        // e assim estamos substituindo o estado anterior por um novo estado
        setStudentName('')
        setStudentMat('')
    }

    useEffect(() => {
        console.log('useEffect foi chamado')
        async function fetchData() {
            const response = await fetch(`https://api.github.com/users/marceloicampos`)
            const data = await response.json() as ProfileResponse
            console.log(data);
            setUser({
                name: data.name,
                id: data.id,
                avatar: data.avatar_url
            })
        }
        fetchData()
        // const url = 'https://api.github.com/users/marceloicampos'
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         setUser({
        //             name: data.name,
        //             id: data.id,
        //             avatar: data.avatar_url
        //         })
        //     })
        // dentro do corpo do useEffect ficam as ações a serem executadas
        // o primeiro parâmetro é uma função que será executada automaticamente quando o componente for renderizado
        // o segundo parâmetro é uma função que será executada quando o componente for alterado
    }, [])
    // o segundo parâmetro serve para indicar quais os estados que o useEffect irá monitorar e quais estados que o useEffect depende
    // se o segundo parâmetro for vazio, o useEffect será executado apenas uma vez
    // se o segundo parâmetro for informado, o useEffect será executado a cada alteração de estado informado

    return (
        <div className="container">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src="/react.svg" className="logo react" alt="React logo" />
                </a>
            </div>
            <div>
                <header className="header-container">
                    <h1>Lista de Presença</h1>
                    <div className="title-container">
                        <h3>Nome: {studentName}</h3>
                        <h3>Matricula: {studentMat}</h3>
                    </div>
                    <div className="title-container">
                        <p>Meu Nome: {user.name} &nbsp;</p>
                        <p>GitHub Id: {user.id}</p>
                        <img src={user.avatar} alt="logo usuário github" />
                    </div>
                </header>
            </div>
            <input
                id="name"
                type="text"
                placeholder="Digite seu Nome ..."
                onChange={inputName => setStudentName(inputName.target.value)}
                onFocus={inputName => (inputName.target.placeholder = '')}
                onBlur={inputName => (inputName.target.placeholder = 'Digite seu Nome ...')}
                value={studentName}
            />
            <input
                id="mat"
                type="text"
                maxLength={4}
                placeholder="Digite sua Matrícula ..."
                onChange={inputMat => setStudentMat(inputMat.target.value)}
                onFocus={inputMat => (inputMat.target.placeholder = '')}
                onBlur={inputMat => (inputMat.target.placeholder = 'Digite sua Matrícula ...')}
                value={studentMat}
            />
            <button type="button"
                onClick={handleAddStudent}
                disabled={!studentName || !studentMat}
            >
                ADICIONAR PRESENÇA
            </button>
            {students.map(student => (
                <Card key={student.key} id={student.id} name={student.name} time={student.time} mat={student.mat} />
            ))}
        </div>
    )
    // no input acima pegamos o target.value do element 'input...' pelo onChange
    // então atualizamos o valor do estado por setStudentName e por setStudentMat

    // ##################################################################

    // <Card name="Celo" time="10:55:25" mat={1443} />

    // ##################################################################

    // o conteúdo do card está envolvido por chaves para que o react entenda que é um objeto
    // o map serve para percorrer cada item da lista de students e retornar um elemento
    // conforme seja exibido de acordo com elemento card

    // ##################################################################

    // <img src="https://github.com/marceloicampos.png" alt="logo usuário" />
}

// export default Home
