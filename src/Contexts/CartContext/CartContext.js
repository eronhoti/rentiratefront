import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext= createContext()

export default function CartContextProvider({children}){
    const[noOfCartIteams,setNoOfCartIteams]=useState()
   
   
    async function getLoggedUserCart() {
        try {
          const{data}= await axios.get('https://ecommerce.routemisr.com/api/v1/cart',
        {headers:{token: localStorage.getItem('token')}})
        setNoOfCartIteams(data?.numOfCartItems)
          
        } catch (error) {
          console.log(error)
        }
        
      }
   
      console.log(localStorage.getItem('intialNoOfCartIteams'))
      useEffect(()=>{
        getLoggedUserCart()
      },[])
  
    
 return <CartContext.Provider value={{noOfCartIteams,setNoOfCartIteams}}>
    {children}
 </CartContext.Provider>


}


