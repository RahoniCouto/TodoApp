import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/todos"><FaRegCalendarAlt /> Todo App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-center">
                <li className="nav-item">
                    <a className="nav-link" href="/todos">Tarefas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
)