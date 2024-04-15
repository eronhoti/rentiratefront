// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import { toast } from 'react-toastify';
// import { CartContext } from "../CartContext/CartContext";

// export const LoggedUserAdressContext= createContext()


// export default function GetLoggedUserAdressProvider({children}){
//     const[loggedUserData,setLoggedUserData]=useState()
 
//     async function getLogedUserAdress() {
//         const{data}= await axios.get('https://ecommerce.routemisr.com/api/v1/addresses',
//         {headers:{
//           token: localStorage.getItem('token')}
//         })
//         console.log(data)
//         setLoggedUserData(data?.data)
//       }
//       useEffect(()=>{
//         getLogedUserAdress() 
//       })
//     const [details, setdetails] = useState(localStorage.setItem('details',loggedUserData.details));  
//     const [city, setCity] = useState(localStorage.setItem('city',loggedUserData.city));  
//     const [phone, setphone] = useState(localStorage.setItem('city',loggedUserData.phone)); 


 
    
//  return <LoggedUserAdressContext.Provider value={[[details, setdetails],[city, setCity],[phone, setphone]]}>
//     {children}
//  </LoggedUserAdressContext.Provider>


// }
import React from 'react'

export default function GetLoggedUserAdress() {
  return (
    <div>
      hii
    </div>
  )
}



