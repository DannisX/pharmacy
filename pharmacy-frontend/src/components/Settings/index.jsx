import React from 'react'
// import style from './index.module.css'
// import PropTypes from 'prop-types'

import RouteWithSubRoute from '../RouteWithSubRoute'

const Settings = ({children})=>{
    return (<div>
        Settings
        {
            children.map(route=>{
                return (<RouteWithSubRoute key={route.component} {...route}/>)
            })
        }
    </div>)
}

export default Settings;