import React from 'react'
// import PropTypes from 'prop-types'

import RouteWithSubRoute from '../RouteWithSubRoute'
const MedicineUnexpected = ({children})=>{
    return (<div>
        Medicine
        {
            children.map(route=>{
                return (<RouteWithSubRoute key={route.component} {...route}/>)
            })
        }
    </div>)
}

export default MedicineUnexpected;