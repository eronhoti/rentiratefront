import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'
import Login from '../Login/Login'

export default function ProtectedRoute({children}) {
    const{isUserLogged,setisUserLogged}= useContext(AuthContext)
   
  return (
    <div>
    { isUserLogged ? children: <Login/> }
    </div>
  )
}
