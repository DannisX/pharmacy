import React from 'react'
// import style from './index.module.css'
// import PropTypes from 'prop-types'

import RouteWithSubRoute from '../RouteWithSubRoute'

const Count = ({children})=>{
    return (<div>
        Count
        {
            children.map(route=>{
                return (<RouteWithSubRoute key={route.component} {...route}/>)
            })
        }
    </div>)
}

export default Count;