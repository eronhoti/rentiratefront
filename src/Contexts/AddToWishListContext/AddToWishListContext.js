import axios from "axios";
import { createContext, useContext } from "react";
import { toast } from 'react-toastify';
import { wishListContext } from "../WishListContext/WishListContext";


export const AddToWishListContext= createContext()


export default function AddProductToWishListProvider({children}){
  const{noOfWishListIteams,setNoOfWishListIteams}=useContext(wishListContext)

    async function addProductToWishList(productId) {
        const{data}= await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',
        {productId},
        { headers:{ token: localStorage.getItem('token')}});
        toast.success(data.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
        console.log(data)
        setNoOfWishListIteams(data.data.length)
        console.log(noOfWishListIteams)
        
      
       }
    
 return <AddToWishListContext.Provider value={{addProductToWishList}}>
    {children}
 </AddToWishListContext.Provider>


}


