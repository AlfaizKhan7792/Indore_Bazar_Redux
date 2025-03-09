import React from 'react'
import useAuthStatus from '../Hooks/useAuthStatus'
import LoadingPage from './LoadingPage'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    const {loggedIn , checkStatus} = useAuthStatus()

    if(checkStatus){
        return <LoadingPage />
    }

  return loggedIn ? <Outlet /> : <Navigate to={"/login"}/> 
}

export default PrivateRoute
