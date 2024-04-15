import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import CartProducts from './CartProducts'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Contexts/CartContext/CartContext'
import cartGif from '../../Assets/Images/cartGif.349817200c4dd27c5d4a.gif'
import {Helmet} from "react-helmet";


export default function Cart() {
  const[cartId,setCartId]=useState()
  const{noOfCartIteams,setNoOfCartIteams}=useContext(CartContext)
  const [isLoading,setIsLoading]=useState(false)
   

  
  async function getLoggedUserCart() {
    try {
      setIsLoading(false)
      const{data}= await axios.get('https://ecommerce.routemisr.com/api/v1/cart',
    {headers:{token: localStorage.getItem('token')}})
    console.log(data)
    setCart(data)
    setCartId(data.data._id)
    setIsLoading(true)
    console.log(data.data._id)
    } catch (error) {
      console.log(error)
    }
    
  }
   function removeProductFromCart(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then(async(result) => {
      if (result.isConfirmed) {
        const{data}= await axios.delete('https://ecommerce.routemisr.com/api/v1/cart/' + id,
        {headers:{token:localStorage.getItem('token')
      
      }})
    
      setCart(data)
      setNoOfCartIteams(data.numOfCartItems)
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your iteam has been deleted.",
          icon: "success"
        });
      } else if (
       
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
   
}
  async function clearCart() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then(async(result) => {
      if (result.isConfirmed) {
        const{data}= await axios.delete('https://ecommerce.routemisr.com/api/v1/cart',
        {headers:{token:localStorage.getItem('token')
      
      }})
    
      setCart(data)
      setNoOfCartIteams(data.numOfCartItems)
     
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your cart has been deleted.",
          icon: "success"
        });
      } else if (
       
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
 
}



function updateCartProductsCount(id,count) {
  if (count ==0) {
    removeProductFromCart(id)}
    else{
        clearTimeout(timeOutId)

    setTimeOutId(setTimeout( async  ()=>{
        const{data}= await axios.put('https://ecommerce.routemisr.com/api/v1/cart/' +id,
  {
    count
},
{headers:{ token: localStorage.getItem('token')

}})
setCart(data)},5000)) 
     
    }
}



  const[cart,setCart]=useState({})
  const[timeOutId,setTimeOutId]=useState()

  useEffect(()=>{
    getLoggedUserCart()
  },[])
  return ( <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Rentirate || Cart</title>
                
            </Helmet>
   <div className='mt-5'>
    
    
      { cart.data?.products.length > 0 || !isLoading   ? 
    <div className='my-5 mt-5 '> 
    <div className='btnClear ' >
    <button className='btn btn-outline-danger d-block ms-auto mt-5  ' onClick={clearCart}>Clear cart</button>
    </div>
    {cart.data?.products.map((cartProduct,index)=>{
    return <CartProducts key={index} updateCartProductsCount={updateCartProductsCount}  cartProduct={cartProduct} removeProductFromCart= {removeProductFromCart}/>
   })}
    <div className='d-flex justify-content-between'>  
   <Link to={'/adress/' + cartId } className='btn bg-main text-white mt-3 ms-3 ' >CheckOut</Link>
   <p>Total cart price: {cart.data?.totalCartPrice}</p>
    </div>
    </div>
    :
    <div className=' mt-5'>
    <h2 className='alert text-center mt-5' >Yor CART IS EMPTY MAYBE ORDER SOMETHING </h2>
    <img src={cartGif} className='w-50 mx-auto d-flex justify-content-center  '/>
    </div>
  }
    
    
   </div>

    
    </>
  )
}
