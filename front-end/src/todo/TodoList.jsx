import React from 'react'
import Button from '../template/Button'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'done' : ''}>{todo.description}</td>
                <td>
                    <Button 
                        tipo="success" 
                        name="Finalizar"
                        onClick={() => props.handleAsDone(todo)}
                        hide={todo.done}
                    />
                    <Button 
                        tipo="warning" 
                        name="Pendente"
                        onClick={() => props.handlePending(todo)}
                        hide={!todo.done}
                    />
                    <Button 
                        tipo="danger" 
                        name="Remover"
                        onClick={() => props.handleRemove(todo)}
                        hide={!todo.done}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
        <thead>
            <tr>
                <th>Descrição</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            { renderRows() }
        </tbody>
    </table>
    )
}