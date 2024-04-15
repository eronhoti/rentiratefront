import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import WishListProducts from './WishListProducts'
import { wishListContext } from '../../Contexts/WishListContext/WishListContext'
import {Helmet} from "react-helmet";
export default function WishList() {
  const [isLoading,setIsLoading]=useState(false)
  const[wishList,setWishList]=useState({})
  const{noOfWishListIteams,setNoOfWishListIteams}=useContext(wishListContext)
   

  
  async function getLoggedUserWishList() {
    try {
      setIsLoading(false)
      const{data}= await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',
    {headers:{token: localStorage.getItem('token')}})
    console.log(data)
    setWishList(data)
    setNoOfWishListIteams(data.count)
    setIsLoading(true)
    } catch (error) {
      console.log(error)
    }
    
  }
   function removeProductFromWishList(id) {
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
        const{data}= await axios.delete('https://ecommerce.routemisr.com/api/v1/wishlist/' + id,
        {headers:{token:localStorage.getItem('token')
      
      }})
    
      setWishList(data)
      setNoOfWishListIteams(data.count)
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your iteam has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
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

async function MovedProductFromWishList(id) {
   const{data}= await axios.delete('https://ecommerce.routemisr.com/api/v1/wishlist/' + id,
        {headers:{token:localStorage.getItem('token')
      
      }})
    
      setWishList(data)
      setNoOfWishListIteams(data.count)
          
}

  useEffect(()=>{
    getLoggedUserWishList()
  },[])
  return ( <>
   <Helmet>
                <meta charSet="utf-8" />
                <title>Fresh cart || My Wish List</title>
                
            </Helmet>

    {wishList.data?.length > 0 || !isLoading  ? 
    <div className='my-5'> 
    {wishList.data?.map((wishListProduct,index)=>{
    return <WishListProducts key={index} MovedProductFromWishList={MovedProductFromWishList}  wishListProduct={wishListProduct} removeProductFromWishList= {removeProductFromWishList} />
   })}
    
    </div>
    :
    <h2 className='alert alert-warning my-5 text-center' >No products in your WishList </h2>
  }
    
    
   
    </>
  )
}
