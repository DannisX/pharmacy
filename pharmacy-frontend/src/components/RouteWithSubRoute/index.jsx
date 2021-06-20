import React from 'react'
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types'

const RouteWithSubRoute = (route)=>{
    return (<Route path={route.to}  render={(props)=>(<route.component {...props} children={route.children}></route.component>)}></Route>)
}

export default RouteWithSubRoute;