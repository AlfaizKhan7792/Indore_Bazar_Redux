import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const useAuthStatus = () => {

    const {Users} = useSelector(state => state.Auth)

    const [loggedIn , setLoggedIn] = useState(false)
    const [checkStatus , setCheckStatus] = useState(true)

    useEffect(() =>{
Users ? setLoggedIn(true) : setLoggedIn(false)
setCheckStatus(false)
    },[Users])

  return {loggedIn , checkStatus}
}

export default useAuthStatus
