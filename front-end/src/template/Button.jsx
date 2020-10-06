import React from 'react'
import If from './if'

export default props => (
    <If test={!props.hide}>
        <button 
            className={ `btn btn-`+ props.tipo} 
            onClick={props.onClick}>
                {props.name}
        </button>
    </If>
)