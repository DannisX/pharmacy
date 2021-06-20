import React from 'react'
// import style from './index.module.css'
// import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'

import RouteWithSubRoute from '../RouteWithSubRoute'

const User = ({children})=>{
    return (<div>
        User
        <Redirect to='/user/cashier'></Redirect>
        {
            children.map(route=>{
                return (<RouteWithSubRoute key={route.component} {...route}/>)
            })
        }
    </div>)
}

export default User;