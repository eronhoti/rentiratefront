import React, { useContext, useState } from 'react'
import { AddToCartContext } from '../../Contexts/AddToCartContext/AddToCartContext'


export default function WishListProducts({wishListProduct,removeProductFromWishList,MovedProductFromWishList}) {
    const{addProductToCart}=useContext(AddToCartContext)

  
    
  return (
    <div>
      <div >
      <div className='cart-product shadow rounded-2 my-3' >
        <div className='row align-items-center ' >
          <div className='col-md-2' >
          <img src={wishListProduct?.imageCover} className='w-100'/>

          </div>
          <div className='col-md-8' >
          <h2 className='fs-4'>{wishListProduct?.title}</h2>
          <h5><i className='rating-color fas fa-star'></i>{wishListProduct?.ratingsAverage}</h5>
          <p className='d-flex justify-content-between' >
            <span> Price:{wishListProduct?.price}EGP</span>

          </p>
          </div>
          <div className='col-md-2'>
            <button className='btn text-danger' onClick={()=>{removeProductFromWishList(wishListProduct._id) }} > Remove <i className="  fa-solid fs-4 fa-trash-can"></i></button>

          </div>
          <button className='btn bg-main text-white w-25 ms-auto mx-5 my-3' onClick={()=>{addProductToCart(wishListProduct._id);MovedProductFromWishList(wishListProduct._id)}} >+Add To Cart</button>


        </div>

      </div>
  </div>
    </div>
  )
}
