import React from 'react'
import Button from '../template/Button'
import { GoCheck, GoSync, GoX } from 'react-icons/go'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'done' : ''}>{todo.description}</td>
                <td>
                    <Button 
                        tipo="success" 
                        name={< GoCheck />}
                        onClick={() => props.handleAsDone(todo)}
                        hide={todo.done}
                    />
                    <Button 
                        tipo="warning" 
                        name={ < GoSync />}
                        onClick={() => props.handlePending(todo)}
                        hide={!todo.done}
                    />
                    <Button 
                        tipo="danger" 
                        name={ <GoX />}
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
                <th className="tableActions">Ações</th>
            </tr>
        </thead>
        <tbody>
            { renderRows() }
        </tbody>
    </table>
    )
}