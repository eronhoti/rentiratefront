import { createContext, useState } from "react";

export const AuthContext= createContext()

export default function AuthContextProvider({children}){
    const [isUserLogged,setisUserLogged]=useState(!!localStorage.getItem('token'))
  
    
 return <AuthContext.Provider value={{isUserLogged,setisUserLogged}}>
    {children}
 </AuthContext.Provider>


}


