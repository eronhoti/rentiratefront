import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AddToCartContext } from '../../Contexts/AddToCartContext/AddToCartContext';
import { AddToWishListContext } from "../../Contexts/AddToWishListContext/AddToWishListContext";


export default function Productshelper( {product} ) {

  const{addProductToCart}=useContext(AddToCartContext)
  const{addProductToWishList}=useContext(AddToWishListContext)
  const [isWished, setIsWished] = useState(false);
  

 
  return (<>
   
    <div className='product productP p-3 mt-3 '>
    
      <Link to={'/ProductDetails/'+ product?.id} className='a'>
      <img className='w-100' src={product?.imageCover}/>
      <div className='d-flex' >
      <div>
      <h5 className='pt-2' >{product?.category?.name}</h5>
      <h4 className='title' >{product?.title}</h4></div>
</div></Link>
      <div className=' d-flex pe-2 '> <i className= {`fas fa-heart ms-auto m-3 fs-4  ${isWished ? 'bg-red' : '' }`}   
     onClick={()=>{addProductToWishList(product.id);
      setIsWished(true) }}> 
      </i> </div>
      <div className='d-flex justify-content-between'>
        <span>{product?.price}EGP</span>
        <span>
          <i className='rating-color fas fa-star'></i>
          {product?.ratingsAverage}
        </span>
        
      </div>
     
      <button className='btn bg-main text-white w-100 mt-4' onClick={()=>{addProductToCart(product.id)}} >+Add To Cart</button>
     
    </div>
</>  )
}
