import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap'

import '../template/custon.css'

import React from 'react'
import Routes from './Routes'
import Menu from '../template/Menu'

export default props => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
)