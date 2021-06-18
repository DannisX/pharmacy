import React from 'react'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'

import { routes } from '../../router'

const Main = ()=>{

    return (
        <Switch>
            {
                routes.map(item=>{
                    return (<Route path={item.to} component={item.component}></Route>)
                })
            }
        </Switch>
    )
}


export default Main;


