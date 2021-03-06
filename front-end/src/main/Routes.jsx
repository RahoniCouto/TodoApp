import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Todo from '../todo/Todo'
import About from '../about/About'

const Pagina404 = () => (<div>Pagina 404</div>)

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/todos' component={ Todo } />
            <Route path='/about' component={ About } />
            <Route path="/" component={Todo} />
            <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>
)