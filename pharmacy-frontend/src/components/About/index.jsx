import React from 'react'
// import style from './index.module.css'
// import PropTypes from 'prop-types'

import RouteWithSubRoute from '../RouteWithSubRoute'

const About = ({children})=>{
    return (<div>
        About
        {
            children.map(route=>{
                return (<RouteWithSubRoute key={route.component} {...route}/>)
            })
        }
    </div>)
}

export default About;