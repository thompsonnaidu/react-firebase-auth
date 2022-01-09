import React from 'react'
import { Route , Navigate,Outlet} from "react-router-dom"
import { useAuth } from '../../contexts/AuthContext'

function PrivateRoute({component:Component, ...rest}) {
    const {currentUser}= useAuth();
    console.log(Component)
    return (
        currentUser ? <Outlet/>:<Navigate to="/login"/>
         

    )
}

export default PrivateRoute
