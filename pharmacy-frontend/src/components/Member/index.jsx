import React from 'react'
// import style from './index.module.css'
// import PropTypes from 'prop-types'

import RouteWithSubRoute from '../RouteWithSubRoute'

const Member = ({children})=>{
    return (<div>
        Member
        {
            children.map(route=>{
                return (<RouteWithSubRoute key={route.component} {...route}/>)
            })
        }
    </div>)
}

export default Member;