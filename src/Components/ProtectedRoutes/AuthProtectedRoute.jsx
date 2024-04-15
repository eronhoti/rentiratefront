import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'

export default function AuthProtectedRoute({ children }) {
  const {isUserLogged, setisUserLogged} = useContext(AuthContext)


  return (
    <div>
      {isUserLogged ? <Navigate to={'/home'} /> : children}
    </div>
  )
}