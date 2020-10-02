import React from 'react'
import Div from '../template/Grid'
import Button from '../template/Button'

export default props => (
    <div role="form" className="row todoForm">
        <Div cols="12 12 10">
            <input id="description" className="form-control" placeholder="adicione uma tarefa" />
        </Div>

        <Div cols="12 3 2">
            <Button style="primary" name="+"></Button>
        </Div>
             
    </div>
)