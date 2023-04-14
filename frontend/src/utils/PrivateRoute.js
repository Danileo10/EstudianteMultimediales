import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
const PrivateRoute = () => {
    let auth = {'token':false}
    return(
        auth.token ? <Outlet/> : <Navigate to = "/login"/> 
    )
    
}

export default PrivateRoute;