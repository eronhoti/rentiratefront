import React, { useState } from 'react'


export default function CartProducts({cartProduct,removeProductFromCart,updateCartProductsCount}) {

  const[cartCount,setCartCount]=useState(cartProduct.count)
    
  return (
    <div>
      <div >
      <div className='cart-product shadow rounded-2 my-3 position-relative' >
        <div className='row align-items-center ' >
          <div className='col-md-2' >
          <img src={cartProduct.product.imageCover} className='w-100'/>

          </div>
          <div className='col-md-8' >
          <h2 className='fs-4' >{cartProduct.product.title}</h2>
          <h5><i className='rating-color fas fa-star'></i>{cartProduct.product.ratingsAverage}</h5>
          <p className='d-flex justify-content-between' >
            <span>{cartProduct.price}</span>
            <span>  {cartProduct.product.category.name}</span>
          </p>
          <p><span className='fw-bolder' >Total price: </span>{cartProduct.price * cartProduct.count}EGP</p>

          </div>
          <div className='col-md-2 '>
            <button className='btn text-danger position-absolute top-0 right-0 mt-3' onClick={()=>{removeProductFromCart(cartProduct.product._id) }} >Remove <i className="  fa-solid fs-4 fa-trash-can"></i></button>
            <div className='d-flex align-items-center' >
              <button className='btn bg-main text-white mx-2' onClick={()=> {updateCartProductsCount(cartProduct.product._id,cartCount-1);setCartCount(cartCount-1)}}>-</button>
              <span>{cartCount}</span>
              <button className='btn bg-main text-white mx-2'onClick={()=> {updateCartProductsCount(cartProduct.product._id,cartCount+1);setCartCount(cartCount+1)}} >+</button>

            </div>

          </div>

        </div>

      </div>
  </div>
    </div>
  )
}
