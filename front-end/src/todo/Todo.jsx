import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/Header'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:27017/api/todos'

export default class Todo extends Component {

    constructor(props) {
       super()
       this.state = { description: '', list: [] }
       this.handleChange = this.handleChange.bind(this)
       this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => console.log('funcionou!'))
    }

    render() {
        return (
            <div>
                <PageHeader 
                    name="Tarefas" 
                    small="Cadastro" 
                />
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} 
                />
                <TodoList />
            </div>
        )
    }
}