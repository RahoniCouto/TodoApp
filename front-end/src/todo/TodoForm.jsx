import React from 'react'
import Div from '../template/Grid'
import Button from '../template/Button'

import { GoPlus, GoSearch, GoX } from 'react-icons/go'

export default props => {

    const keyHandle = (e) => {
        if (e.key === 'Enter') {
            e.shiftkey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="row m-5">
            <Div cols="12 9 9 9">
                <input 
                    id="description" 
                    className="form-control" 
                    placeholder="adicione uma tarefa"
                    onKeyUp={keyHandle}
                    onChange={props.handleChange}
                    value={props.description}
                />
            </Div>
    
            <Div cols="12 3 3 3">
                <div className="mobileButtons">
                    <Button 
                        tipo="primary" 
                        name={<GoPlus />}
                        onClick={props.handleAdd}
                    ></Button>
                    <Button 
                        tipo="info" 
                        name={<GoSearch />}
                        onClick={props.handleSearch}
                    ></Button>
                    <Button 
                        tipo="default" 
                        name={<GoX />}
                        onClick={props.handleClear}
                    ></Button>
                </div>
            </Div>
                 
        </div>
    )
}