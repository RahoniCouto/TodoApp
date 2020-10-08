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
       this.handleSearch = this.handleSearch.bind(this)
       this.handleClear = this.handleClear.bind(this)

       this.handleRemove = this.handleRemove.bind(this)
       this.handlePending = this.handlePending.bind(this)
       this.handleAsDone = this.handleAsDone.bind(this)

       this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
            .then( resp => this.refresh(this.state.description))
    }

    handlePending(todo){
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false})
            .then( resp => this.refresh(this.state.description))
    }

    handleClear(){
        this.refresh()
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
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleAsDone={this.handleAsDone}
                    handlePending={this.handlePending}
                />
            </div>
        )
    }
}