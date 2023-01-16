import './styles.css'

export type CardProps = {
    key: number
    id: number
    name: string
    time: string
    mat: string
}

export function Card({ id, name, time, mat }: CardProps) {
    return (
        <div className=" card">
            <p className="itemId">{id}</p>
            <p className="itemName">{name}</p>
            <p className="itemTime">{time}</p>
            <p className="itemMat">{mat}</p>
        </div>
    )
}
// acima estamos desestruturando o card com os atributos que vamos usar
// export function Card(props) {
//     return (
//         <div className="card">
//             <strong>{props.name}</strong>
//             <small>{props.time}</small>
//             <p>{props.mat}</p>
//         </div>
//     )
// }
