import React from 'react'
import {Route} from 'react-router-dom'
// import PropTypes from 'prop-types'

import { routes } from '../../router'

import RouteWithSubRoute from '../RouteWithSubRoute'
const Main = ()=>{

    return (<main>
        {
            routes.map(route=>{
                 if(route.to === '/'){
                    return (<Route path={route.to} exact  render={()=>(<route.component></route.component>) } key={route.component}></Route>)
                }else{
                    return (<RouteWithSubRoute {...route} key={route.component}></RouteWithSubRoute>)
                }
            })
        }
    </main>
    )
}


export default Main;


