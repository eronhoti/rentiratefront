import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';
import { CartContext } from "../CartContext/CartContext";

export const UpdateUserDataContext= createContext()


export default function UpdateUserDataCProvider({children}){
    const [name, setName] = useState(localStorage.getItem('name'));  
    const [phone, setPhone] = useState(localStorage.getItem('phone'));  
    const [email, setEmail] = useState(localStorage.getItem('email')); 


 
    
 return <UpdateUserDataContext.Provider value={[[name, setName],[phone, setPhone],[email, setEmail]]}>
    {children}
 </UpdateUserDataContext.Provider>


}


