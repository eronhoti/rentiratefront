import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const wishListContext= createContext()

export default function WishListContextProvider({children}){
    const[noOfWishListIteams , setNoOfWishListIteams]=useState()
   
   
    async function getLoggedUserWishList() {
        try {
          const{data}= await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',
        {headers:{token: localStorage.getItem('token')}})
        setNoOfWishListIteams(data?.count)
          
        } catch (error) {
          console.log(error)
        }
        
      }
   
      console.log(localStorage.getItem('intialNoOfWishListIteams'))
      useEffect(()=>{
        getLoggedUserWishList()
      },[])
  
    
 return <wishListContext.Provider value={{noOfWishListIteams,setNoOfWishListIteams}}>
    {children}
 </wishListContext.Provider>


}


