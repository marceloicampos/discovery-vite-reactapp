import React, { useState } from 'react'
// o useState o padrão para criar um estado no react e retorna um array com 2 posições
import './styles.css'
import reactLogo from '../../assets/react.svg'
import { Card } from '../../components/Card'

export function Home() {
    const [studentKey, setStudentKey] = useState(0)
    const [studentId, setStudentId] = useState(1)
    const [studentName, setStudentName] = useState('')
    const [studentMat, setStudentMat] = useState('')
    // o primeiro é onde GUARDAMOS o valor do estado e o segundo é a FUNÇÃO que atualiza o estado [state, setState]
    // lembrando que o useState pode iniciar vazio ''
    const [students, setStudents] = useState([])

    function handleAddStudent(event) {
        event.preventDefault() // prevent page refresh, but just when use tag form
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
        if (studentName == '' || studentMat == '') {
            document.getElementById('alert').innerHTML = 'Preencher Todos os Campos'
        } else {
            setStudents(prevState => [...prevState, newStudent])
            setStudentKey(studentKey => studentKey + 1)
            console.log(newStudent.key)
            setStudentId(studentId => studentId + 1)
            // acima temos um array de estudantes e adicionamos um novo estudante
            // estamos quebrando a regra da imutabilidade do array
            // o ...prevState (pode ser qualquer nome) é o spread operator
            // e assim estamos substituindo o estado anterior por um novo estado
            setStudentName('')
            setStudentMat('')
            document.querySelector('#name').value = ''
            document.querySelector('#mat').value = ''
            document.getElementById('alert').innerHTML = ''
        }
    }
    return (
        <div className="container">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <div className="title-container">
                <h1>Lista de Presença</h1>
                <h3>
                    Nome: {studentName} | Matricula: {studentMat}
                </h3>
            </div>
            <div id="alert"></div>
            <input
                id="name"
                type="text"
                placeholder="Digite seu Nome ..."
                onChange={inputName => setStudentName(inputName.target.value)}
                onFocus={inputName => (inputName.target.placeholder = '')}
                onBlur={inputName => (inputName.target.placeholder = 'Digite seu Nome ...')}
            />
            <input
                id="mat"
                type="text"
                maxLength={4}
                placeholder="Digite sua Matrícula ..."
                onChange={inputMat => setStudentMat(inputMat.target.value)}
                onFocus={inputMat => (inputMat.target.placeholder = '')}
                onBlur={inputMat => (inputMat.target.placeholder = 'Digite sua Matrícula ...')}
            />
            <button type="button" onClick={handleAddStudent}>
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
}

// export default Home
