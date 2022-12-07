import React, { useState } from 'react'
// o useState o padrão para criar um estado no react e retorna um array com 2 posições
import './styles.css'
import { Card } from '../../components/Card'

export function Home() {
    const [studentName, setStudentName] = useState('')
    const [studentMat, setStudentMat] = useState('')
    const [studentKey, setStudentKey] = useState(0)
    // o primeiro é onde GUARDAMOS o valor do estado e o segundo é a FUNÇÃO que atualiza o estado [state, setState]
    // lembrando que o useState pode iniciar vazio ''
    const [students, setStudents] = useState([])

    function handleAddStudent(e) {
        e.preventDefault() // prevent page refresh, but just when use tag form
        const newStudent = {
            key: studentKey,
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
            <h1>Lista de Presença</h1>
            <h2>
                Nome: {studentName} | Matricula: {studentMat}
            </h2>
            <div id="alert"></div>
            <input
                id="name"
                type="text"
                placeholder="Digite seu Nome ..."
                onChange={e => setStudentName(e.target.value)}
                onFocus={e => (e.target.placeholder = '')}
                onBlur={e => (e.target.placeholder = 'Digite seu Nome ...')}
            />
            <input
                id="mat"
                type="text"
                placeholder="Digite sua Matrícula ..."
                onChange={e => setStudentMat(e.target.value)}
                onFocus={e => (e.target.placeholder = '')}
                onBlur={e => (e.target.placeholder = 'Digite sua Matrícula ...')}
            />
            <button type="button" onClick={handleAddStudent}>
                Adicionar
            </button>
            {students.map(e => (
                <Card key={e.key} name={e.name} time={e.time} mat={e.mat} />
            ))}
        </div>
    )
    // no input acima pegamos o target.value do element 'e' pelo onChange
    // então atualizamos o valor do estado pelo do setStudentName e do setStudentMat

    // ##################################################################

    // <Card name="Celo" time="10:55:25" mat={1443} />

    // ##################################################################

    // {students.map((student) => (
    //     <Card name={student.name} time={student.time} mat={student.mat}/>
    // ))}
}

// export default Home
