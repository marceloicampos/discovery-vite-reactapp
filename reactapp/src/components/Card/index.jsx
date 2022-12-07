import './styles.css'

export function Card({ name, time, mat }) {
    return (
        <div className="card">
            <strong>{name}</strong>
            <small>{time}</small>
            <p>{mat}</p>
        </div>
    )
}
// acima estamos desestruturando o card com os atributos que vamos usar
// export function Card(props) {
//     return (
//         <div className="card">
//             <strong>{props.name}</strong>
//             <small>{props.time}</small>
//             <p>{props.age}</p>
//         </div>
//     )
// }
