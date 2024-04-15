import axios from "axios";
import { createContext, useContext } from "react";
import { toast } from 'react-toastify';
import { CartContext } from "../CartContext/CartContext";

export const AddToCartContext= createContext()


export default function AddProductToCartProvider({children}){
  const{noOfCartIteams,setNoOfCartIteams}=useContext(CartContext)
  
    async function addProductToCart(productId) {
        const{data}= await axios.post('https://ecommerce.routemisr.com/api/v1/cart',
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
        setNoOfCartIteams(data.numOfCartItems)
      
       }
    
 return <AddToCartContext.Provider value={{addProductToCart}}>
    {children}
 </AddToCartContext.Provider>


}


